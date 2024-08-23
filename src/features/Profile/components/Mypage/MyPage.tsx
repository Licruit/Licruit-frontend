import { CloseIcon } from 'public/assets/icons';
import useUserType from '@/hooks/usertype/useUserType';
import { useEffect, useState } from 'react';
import ContentCategory from '../common/ContentCategory';
import MyPageHeader from '../common/MyPageHeader';
import Profile from '../common/Profile';
import CompanyShowButtons from './CompanyShowButtons';
import useProfileQuery from '../../hooks/useProfileQuery';
import ContentList from './ContentList';
import useGroupBuyListQuery from '../../hooks/useGroupBuyListQuery';
import { GroupBuyListRes } from '../../model/groupbuylist.model';
import useGroupBuyStatusQuery from '../../hooks/useGroupBuyStatusQuery';

interface Props {
  onClose: () => void;
}

function MyPage({ onClose }: Props) {
  const [content, setContent] = useState(0);
  const [contentList, setContentList] = useState<GroupBuyListRes[]>([]);

  const { data: userProfile } = useProfileQuery();
  const { data: groupBuyLists } = useGroupBuyListQuery();
  const { data: groupBuyStatus } = useGroupBuyStatusQuery();

  const statusCounts = groupBuyStatus
    ? groupBuyStatus?.map((item) => Number(item.statusCount))
    : [];

  const { checkIsCompany } = useUserType();
  const isCompany = checkIsCompany();

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

  if (!userProfile || !groupBuyLists || !groupBuyStatus) return null;

  return (
    <>
      <MyPageHeader
        title='My Page'
        icon={
          <CloseIcon
            fill='#000'
            style={{ cursor: 'pointer' }}
            onClick={onClose}
          />
        }
      />
      <Profile userProfile={userProfile} />
      <ContentCategory setContent={setContent} statusCounts={statusCounts} />
      {content !== 0 && <ContentList contentList={contentList} />}
      {isCompany && <CompanyShowButtons />}
    </>
  );
}

export default MyPage;
