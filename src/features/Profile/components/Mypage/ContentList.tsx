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
  position: relative;

  overflow: scroll;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin-top: -20px;

  border-right: 1px solid ${({ theme }) => theme.color.neutral[900]};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[900]};
  border-left: 1px solid ${({ theme }) => theme.color.neutral[900]};
`;

const BlurBox = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 80px;

  background: linear-gradient(0deg, #fff 0%, rgb(255 255 255 / 0%) 100%);
`;

export default ContentList;
