import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import useBrandNewQuery from '../../hooks/useBrandNewQuery';

interface Props {
  setImageUrl: (value: string) => void;
}

function CatalogList({ setImageUrl }: Props) {
  const { brandNewLiquors } = useBrandNewQuery();
  const navigate = useNavigate();

  const liquors = useMemo(() => brandNewLiquors || [], [brandNewLiquors]);

  useEffect(() => {
    if (liquors.length !== 0) setImageUrl(liquors[0].img);
  }, [liquors, setImageUrl]);

  const handleMouseOverOnItem = (imageUrl: string) => {
    setImageUrl(imageUrl);
  };

  return (
    <CatalogListContainer>
      {liquors.map((liquorItem) => (
        <CatalogListItem
          key={liquorItem.id}
          onClick={() => navigate(`catalog/${liquorItem.id}`)}
          onMouseOver={() => handleMouseOverOnItem(liquorItem.img)}
        >
          <Badge $type='black' $size='sm'>
            {liquorItem.categoryName}
          </Badge>
          <Title>{liquorItem.name}</Title>
          <Description>{liquorItem.description}</Description>
        </CatalogListItem>
      ))}
    </CatalogListContainer>
  );
}

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[30]};
  color: ${({ theme }) => theme.color.common[0]};
`;

const CatalogListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CatalogListItem = styled.li`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 6px;

  padding-bottom: 40px;

  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;

const Description = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

export default CatalogList;
