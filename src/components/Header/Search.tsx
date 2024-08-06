import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { searchParams } from '@/features/Catalog/components/Main/ProductGrid';

import FormInput from '../Input/FormInput';

function Search() {
  const navigate = useNavigate();
  const { watch, register } = useForm();
  const search = watch('search');
  const methods = useForm();

  return (
    <Container>
      <FormProvider {...methods}>
        <FormInput
          placeholder='찾고 싶은 전통주를 입력하세요'
          hasSearch
          {...register('search')}
        />
        <button
          type='button'
          onClick={() => {
            searchParams.set('search', search);
            navigate(`/catalog?${searchParams.toString()}`);
          }}
        >
          검색
        </button>
      </FormProvider>
    </Container>
  );
}

export default Search;
const Container = styled.div`
  width: 260px;
`;
