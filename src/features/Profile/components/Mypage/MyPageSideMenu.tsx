import styled from 'styled-components';
import useMyPageSideMenuStore from '@/store/mypageSideMenuStore';
import { createPortal } from 'react-dom';
import MyPage from './MyPage';
import EditProfile from '../EditProfile/EditProfile';
import GroupBuy from '../GroupBuy/GroupBuy';
import useProfileQuery from '../../hooks/useProfileQuery';

interface Props {
  onClose: () => void;
}

function MyPageSideMenu({ onClose }: Props) {
  const content = useMyPageSideMenuStore((state) => state.content);
  const { data: userProfile, isError } = useProfileQuery();

  if (!userProfile) return null;
  if (isError) window.alert('잠시후 다시 시도해 주세요.');

  const closeMyPage = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={closeMyPage}>
      <Container>
        {content === 'my-page' && (
          <MyPage
            onClose={onClose}
            businessData={{
              businessName: userProfile?.businessName || '',
              businessNum: userProfile?.companyNumber || '',
              profileImage: userProfile.img || '',
            }}
          />
        )}
        {content === 'edit-profile' && (
          <EditProfile userProfile={userProfile} />
        )}
        {content === 'group-buying' && <GroupBuy />}
      </Container>
    </Overlay>,
    document.body
  );
}

const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  background: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  width: 500px;
  height: 100%;

  padding: 20px;

  position: absolute;
  right: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 20px;

  overflow: scroll;

  background: ${({ theme }) => theme.color.common[100]};
`;

export default MyPageSideMenu;
