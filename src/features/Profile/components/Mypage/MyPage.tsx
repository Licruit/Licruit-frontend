import {
  useEditProfileModal,
  useMyPageModal,
} from '@/store/modal/useModalStore';
import { CloseIcon } from 'public/assets/icons';
import { ProfileContainer } from '@/styles/components/Container';
import ContentCategory from '../common/ContentCategory';
import MyPageHeader from '../common/MyPageHeader';
import Profile from '../common/Profile';
// import ContentList from './ContentList';
import EditProfile from '../EditProfile/EditProfile';
import CompanyShowButtons from './CompanyShowButtons';

function MyPage() {
  const { isOpen: isEditProfileOpen, close: closeEditProfile } =
    useEditProfileModal();
  const closeMyPage = useMyPageModal((state) => state.close);

  return (
    <>
      <ProfileContainer>
        <MyPageHeader
          title='My Page'
          icon={
            <CloseIcon
              fill='#000'
              style={{ cursor: 'pointer' }}
              onClick={closeMyPage}
            />
          }
        />
        <Profile />
        <ContentCategory />
        {/* <ContentList /> */}
        {/* TODO 유저 타입에 따른 버튼 보여주기 */}
        <CompanyShowButtons />
      </ProfileContainer>
      {isEditProfileOpen && <EditProfile onClose={closeEditProfile} />}
    </>
  );
}

export default MyPage;
