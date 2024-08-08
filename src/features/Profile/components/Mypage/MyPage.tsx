import { CloseIcon } from 'public/assets/icons';

import { STORAGE_KEY } from '@/constants/storage';
import ContentCategory from '../common/ContentCategory';
import MyPageHeader from '../common/MyPageHeader';
import Profile from '../common/Profile';
// import ContentList from './ContentList';
import CompanyShowButtons from './CompanyShowButtons';

interface Props {
  businessData: {
    businessName: string;
    businessNum: string;
    profileImage: string;
  };
  onClose: () => void;
}

function MyPage({ onClose, businessData }: Props) {
  const isCompany = sessionStorage.getItem(STORAGE_KEY.userType) === 'true';

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
      <Profile businessData={businessData} />
      <ContentCategory />
      {/* <ContentList /> */}
      {/* TODO 유저 타입에 따른 버튼 보여주기 */}
      {isCompany && <CompanyShowButtons />}
    </>
  );
}

export default MyPage;
