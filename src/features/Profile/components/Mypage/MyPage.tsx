import { CloseIcon } from 'public/assets/icons';
import { STORAGE_KEY } from '@/constants/storage';
import ContentCategory from '../common/ContentCategory';
import MyPageHeader from '../common/MyPageHeader';
import Profile from '../common/Profile';
import CompanyShowButtons from './CompanyShowButtons';
import useProfileQuery from '../../hooks/useProfileQuery';

interface Props {
  onClose: () => void;
}

function MyPage({ onClose }: Props) {
  const { data: userProfile, isError } = useProfileQuery();
  const isCompany = sessionStorage.getItem(STORAGE_KEY.userType) === 'true';

  if (!userProfile) return null;

  if (isError) window.alert('잠시후 다시 시도해 주세요.');

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
      <ContentCategory />
      {isCompany && <CompanyShowButtons />}
    </>
  );
}

export default MyPage;
