import Search from '@/components/Header/Search';
import PATH from '@/constants/path';
import styled from 'styled-components';

function SearchBar() {
  return (
    <Bar>
      <Search
        placeholder='구매자 또는 연락처를 입력해주세요'
        searchPath={PATH.management}
      />
    </Bar>
  );
}

export default SearchBar;

const Bar = styled.div`
  position: sticky;
  z-index: 999;
  top: 75px;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  padding: 20px;

  background: rgb(255 255 255 / 60%);
  backdrop-filter: blur(10px);

  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;
