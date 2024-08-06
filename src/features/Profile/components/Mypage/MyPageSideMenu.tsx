import styled from 'styled-components';
import useMyPageSideMenuStore from '@/store/mypageSideMenuStore';
import MyPage from './MyPage';
import EditProfile from '../EditProfile/EditProfile';
import GroupBuy from '../GroupBuy/GroupBuy';

interface Props {
  onClose: () => void;
}

function MyPageSideMenu({ onClose }: Props) {
  const content = useMyPageSideMenuStore((state) => state.content);

  const closeMyPage = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={closeMyPage}>
      <Container>
        {content === 'my-page' && <MyPage onClose={onClose} />}
        {content === 'edit-profile' && <EditProfile />}
        {content === 'group-buying' && <GroupBuy />}
      </Container>
    </Overlay>
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
