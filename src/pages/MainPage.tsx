import { BestSale, Rate, JoinUs, BrandNew } from '@/features/Main';
import { IMAGES } from '@/constants/images';
import { Banner } from '@/styles/components/Banner';
import MyPageSideMenu from '@/features/Profile/components/Mypage/MyPageSideMenu';
import { useEffect, useState } from 'react';

function MainPage() {
  const [isMyPageOpen, setOpen] = useState(true);

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
      {isMyPageOpen && <MyPageSideMenu onClose={() => setOpen(false)} />}
    </>
  );
}

export default MainPage;
