import styled from 'styled-components';
import ContentListItem from './ContentListItem';
import { GroupBuyListRes } from '../../model/groupbuylist.model';

interface Props {
  contentList: GroupBuyListRes[];
}

function ContentList({ contentList }: Props) {
  return (
    <ContentListContainer $hasContent={contentList.length > 0}>
      {contentList.map((listItem) => (
        <ContentListItem key={listItem.id} {...listItem} />
      ))}

      <BlurBox />
    </ContentListContainer>
  );
}

const ContentListContainer = styled.ul<{ $hasContent: boolean }>`
  position: relative;

  overflow: scroll;
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: -20px;

  border-right: 1px solid ${({ theme }) => theme.color.neutral[900]};
  ${({ theme, $hasContent }) =>
    $hasContent && `border-bottom: 1px solid ${theme.color.neutral[900]}`};
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
