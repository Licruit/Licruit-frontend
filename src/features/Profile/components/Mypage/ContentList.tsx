import styled from 'styled-components';
import ContentListItem from './ContentListItem';

function ContentList() {
  return (
    <ContentListContainer>
      <ContentListItem />
      <BlurBox />
    </ContentListContainer>
  );
}

const ContentListContainer = styled.ul`
  width: 100%;
  height: 100%;
  margin-top: -20px;

  position: relative;

  display: flex;
  flex-direction: column;

  border-left: 1px solid ${({ theme }) => theme.color.neutral[900]};
  border-right: 1px solid ${({ theme }) => theme.color.neutral[900]};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[900]};

  overflow: scroll;
`;

const BlurBox = styled.div`
  width: 100%;
  height: 80px;

  position: fixed;
  bottom: 0;

  background: linear-gradient(0deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
`;

export default ContentList;
