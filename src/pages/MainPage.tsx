import { BestSale, Rate, JoinUs, BrandNew } from '@/features/Main';
import { IMAGES } from '@/constants/images';
import { Banner } from '@/styles/components/Banner';
import { useMyPageModal } from '@/store/modal/useModalStore';
import Modal from '@/components/Modal/Modal';
import { useEffect } from 'react';
import MyPage from '@/features/Profile/components/Mypage/MyPage';

function MainPage() {
  const { isOpen: isMyPageOpen, close: closeMyPage } = useMyPageModal();

  useEffect(() => {
    if (isMyPageOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isMyPageOpen]);

  return (
    <>
      <Banner $imageUrl={IMAGES.banner} />
      <BestSale />
      <Rate />
      <JoinUs />
      <BrandNew />
      {isMyPageOpen && (
        <Modal onClose={closeMyPage}>
          <MyPage />
        </Modal>
      )}
    </>
  );
}

export default MainPage;
