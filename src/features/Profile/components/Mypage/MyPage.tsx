import { CloseIcon } from 'public/assets/icons';
import useUserType from '@/hooks/usertype/useUserType';
import { toast } from 'react-toastify';
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
  const checkIsCompany = useUserType();
  const isCompany = checkIsCompany();

  if (!userProfile) return null;
  if (isError) toast.error('잠시후 다시 시도해 주세요.'); // TODO: error boundary 활용

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
