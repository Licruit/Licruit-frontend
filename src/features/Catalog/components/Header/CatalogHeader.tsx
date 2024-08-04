import Category from '@/components/Header/Category';
import FormInput from '@/components/Input/FormInput';
import styled from 'styled-components';

function CatalogHeader() {
  return (
    <Container>
      <Title>TRADITIONAL LIQUOR SPACE</Title>
      <div className='classification'>
        <Category type='catalog' />
        <InputBox>
          <FormInput placeholder='찾고 싶은 전통주를 입력하세요' hasSearch />
        </InputBox>
      </div>
    </Container>
  );
}

export default CatalogHeader;

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
  .classification {
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.extra_bold[80]};
  color: ${({ theme }) => theme.color.neutral[900]};
  margin: 20px 0;
`;
const InputBox = styled.div`
  width: 260px;
`;
