import { CloseIcon } from 'public/assets/icons';

import ContentCategory from '../common/ContentCategory';
import MyPageHeader from '../common/MyPageHeader';
import Profile from '../common/Profile';
// import ContentList from './ContentList';
import CompanyShowButtons from './CompanyShowButtons';

interface Props {
  onClose: () => void;
}

function MyPage({ onClose }: Props) {
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
      <Profile />
      <ContentCategory />
      {/* <ContentList /> */}
      {/* TODO 유저 타입에 따른 버튼 보여주기 */}
      <CompanyShowButtons />
    </>
  );
}

export default MyPage;
