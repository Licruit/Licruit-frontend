import styled from 'styled-components';

function ContentInfoHeader() {
  return (
    <Header>
      <ContentTitle>공동구매 현황</ContentTitle>
      <ContentDesc>(* 최근 1년 기준)</ContentDesc>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  width: 100%;
  padding: 20px 0 20px 20px;

  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[900]};
`;

const ContentTitle = styled.div`
  ${({ theme }) => theme.typo.heading.bold[16]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const ContentDesc = styled.p`
  ${({ theme }) => theme.typo.body.semi_bold[12]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

export default ContentInfoHeader;
