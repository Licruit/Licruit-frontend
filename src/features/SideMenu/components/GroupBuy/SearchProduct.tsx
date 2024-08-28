import { GlassesIcon } from 'public/assets/icons';
import styled, { useTheme } from 'styled-components';
import { getCatalog } from '@/features/Catalog/api/catalog.api';
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import { Liquors } from '@/features/Catalog/types/catalog';
import { useFormContext } from 'react-hook-form';
import Label from '../common/Label';
import { INPUT } from '../../constants/input';
import useDebounce from '../../hooks/useDebounce';

type LiqourInfo = { name: string; id: number };

const SearchProduct = forwardRef(
  ({ ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    const theme = useTheme();
    const [searchResults, setSearchResults] = useState<Liquors[]>();
    const [isSearching, setIsSearching] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const { debouncedValue } = useDebounce(inputValue, 1000);

    useEffect(() => {
      const fetchProducts = async () => {
        const products = await getCatalog({
          queryKey: ['', { search: debouncedValue, page: 1 }],
        });

        if (products) setSearchResults(products.liquors);
      };

      if (debouncedValue) fetchProducts();
    }, [debouncedValue]);

    const { setValue } = useFormContext();

    const handleOnSearch = async (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const searchValue = event.currentTarget.value;

      setIsSearching(true);
      setInputValue(searchValue);
    };

    const handleClickSearch = (liqour: LiqourInfo) => {
      setValue('liquor', liqour);
      setInputValue(liqour.name);
      setIsSearching(false);
    };

    return (
      <SearchWrapper>
        <Label label={INPUT.product.label} isRequired />
        <IconWrapper>
          <GlassesIcon fill={theme.color.neutral[400]} />
          <SearchInput
            placeholder={INPUT.product.placeholder}
            value={inputValue}
            ref={ref}
            {...props}
            onChange={(event) => handleOnSearch(event)}
            onBlur={() => setIsSearching(false)}
          />
        </IconWrapper>
        {isSearching && (
          <SearchList>
            {searchResults?.map((item) => (
              <SearchItem key={item.id} onClick={() => handleClickSearch(item)}>
                {item.name}
              </SearchItem>
            ))}
          </SearchList>
        )}
      </SearchWrapper>
    );
  }
);

const SearchInput = styled.input`
  flex: 1;
  padding: 17px 18px 17px 46px;
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  ${({ theme }) => theme.typo.body.medium[14]};
  &::placeholder {
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    position: absolute;
    left: 18px;
  }
`;

const SearchList = styled.ul`
  position: absolute;
  z-index: 99;
  top: 105%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  padding: 17px;

  background: ${({ theme }) => theme.color.common[100]};
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
`;

const SearchItem = styled.li`
  cursor: pointer;
  width: 100%;
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[400]};

  &:hover {
    color: ${({ theme }) => theme.color.neutral[700]};
  }
`;

const SearchWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
`;

export default SearchProduct;
