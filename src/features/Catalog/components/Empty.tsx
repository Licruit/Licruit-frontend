import styled from 'styled-components';

function Empty() {
  return (
    <Container>
      <div className='main'>원하시는 술을 찾지 못했습니다!</div>
      <div className='sub'>다른 키워드로 검색해 보세요</div>
    </Container>
  );
}

export default Empty;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 262px);
  .main {
    ${({ theme }) => theme.typo.heading.bold[30]};
  }
  .sub {
    ${({ theme }) => theme.typo.body.semi_bold[16]};
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;
