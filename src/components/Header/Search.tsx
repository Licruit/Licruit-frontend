import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { searchParams } from '@/features/Catalog/components/Main/ProductGrid';

import FormInput from '../Input/FormInput';

function Search() {
  const navigate = useNavigate();
  const { watch, register, handleSubmit } = useForm();
  const search = watch('search');
  const methods = useForm();
  const onSubmit = () => {
    if (search) {
      searchParams.set('search', search);
    } else {
      searchParams.delete('search');
    }
    navigate(`/catalog?${searchParams}`);
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            placeholder='찾고 싶은 전통주를 입력하세요'
            hasSearch
            {...register('search')}
          />
        </form>
      </FormProvider>
    </Container>
  );
}

export default Search;
const Container = styled.div`
  width: 260px;
`;
