import styled from 'styled-components';
import {
  useMyPageIsOpenStore,
  useMyPageSideMenuStore,
} from '@/store/mypageSideMenuStore';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import MyPage from './MyPage';
import EditProfile from '../EditProfile/EditProfile';
import GroupBuy from '../GroupBuy/GroupBuyOpenForm';
import SignOut from '../SignOut/SignOut';
import Review from '../Review/Review';

interface Props {
  onClose: () => void;
}

function MyPageSideMenu({ onClose }: Props) {
  const isOpen = useMyPageIsOpenStore((state) => state.isOpen);
  const { content, setContent } = useMyPageSideMenuStore();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  const closeMyPage = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
      setContent('my-page');
    }
  };

  return createPortal(
    <Overlay onMouseDown={closeMyPage}>
      <Container>
        {content === 'my-page' && <MyPage onClose={onClose} />}
        {content === 'edit-profile' && <EditProfile />}
        {content === 'group-buying' && <GroupBuy />}
        {content === 'signout' && <SignOut onClose={onClose} />}
        {content === 'review' && <Review />}
      </Container>
    </Overlay>,
    document.body
  );
}

const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgb(0 0 0 / 40%);
`;

const Container = styled.div`
  position: absolute;
  z-index: 9999;
  right: 0;

  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 500px;
  height: 100%;
  padding: 20px;

  background: ${({ theme }) => theme.color.common[100]};
`;

export default MyPageSideMenu;
