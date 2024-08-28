import { CloseIcon } from 'public/assets/icons';
import { useUserType } from '@/hooks/useCheckUser';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MyPageHeader from '../common/MyPageHeader';
import Profile from '../common/Profile';
import CompanyShowButtons from './CompanyShowButtons';
import useProfileQuery from '../../hooks/useProfileQuery';
import ContentList from './ContentList';
import ShopContentCategory from './ShopContentCategory';
import CompanyContentCategory from './CompanyContentCategory';
import Fallback from './ContentListFallback';

interface Props {
  onClose: () => void;
}

function MyPage({ onClose }: Props) {
  const [content, setContent] = useState(0);
  const { isCompany } = useUserType();

  const { userProfile } = useProfileQuery();

  if (!userProfile) return <></>;

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
      {isCompany ? (
        <CompanyContentCategory />
      ) : (
        <ShopContentCategory setContent={setContent} />
      )}
      {content !== 0 && (
        <ErrorBoundary FallbackComponent={Fallback} resetKeys={[content]}>
          <ContentList content={content} />
        </ErrorBoundary>
      )}
      {isCompany && <CompanyShowButtons />}
    </>
  );
}

export default MyPage;
