import styled from 'styled-components';
import {
  useEditProfileModal,
  useMyPageModal,
} from '@/store/modal/useModalStore';
import { CloseIcon } from 'public/assets/icons';

import ContentCategory from '../common/ContentCategory';
import MyPageHeader from '../common/MyPageHeader';
import Profile from '../common/Profile';
import ContentList from './ContentList';
import EditProfile from '../EditProfile/EditProfile';

function MyPage() {
  const { isOpen: isEditProfileOpen, close: closeEditProfile } =
    useEditProfileModal();
  const closeMyPage = useMyPageModal((state) => state.close);

  return (
    <>
      <MyPageContainer>
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
        <ContentList />
      </MyPageContainer>
      {isEditProfileOpen && <EditProfile onClose={closeEditProfile} />}
    </>
  );
}

const MyPageContainer = styled.div`
  width: 500px;
  height: 100%;

  padding: 20px;

  position: absolute;
  right: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${({ theme }) => theme.color.common[100]};
`;

export default MyPage;
