import styled from 'styled-components';
import FormInput from '../Input/FormInput';

function Search() {
  return (
    <Container>
      <FormInput placeholder='찾고 싶은 전통주를 입력하세요' hasSearch />
    </Container>
  );
}

export default Search;
const Container = styled.div`
  width: 260px;
`;
