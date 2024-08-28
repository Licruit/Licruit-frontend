import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useUserType } from '@/hooks/useCheckUser';
import ContentListItem from './ContentListItem';
import { GroupBuyListRes } from '../../model/groupbuylist.model';
import useGroupBuyListQuery from '../../hooks/useGroupBuyListQuery';

interface Props {
  content: number;
}

function ContentList({ content }: Props) {
  const [contentList, setContentList] = useState<GroupBuyListRes[]>([]);
  const { isCompany } = useUserType();
  const { groupBuyLists } = useGroupBuyListQuery(isCompany);

  useEffect(() => {
    const statusLabels = ['신청', '승인대기', '배송중', '배송완료'];
    if (groupBuyLists) {
      if (content !== 0) {
        setContentList(
          groupBuyLists.filter(
            (item) => item.status === statusLabels[content - 1]
          )
        );
      }
    }
  }, [content, groupBuyLists]);

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
  border-bottom: ${({ theme, $hasContent }) =>
    $hasContent ? `1px solid ${theme.color.neutral[900]}` : 'none'};
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
