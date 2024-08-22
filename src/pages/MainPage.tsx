import { BestSale, Rate, JoinUs, BrandNew } from '@/features/Main';
import { IMAGES } from '@/constants/images';
import { Banner } from '@/styles/components/Banner';
import MyPageSideMenu from '@/features/Profile/components/Mypage/MyPageSideMenu';
import { useEffect, useState } from 'react';
import MetaTag from '@/components/MetaTag';

function MainPage() {
  const [isMyPageOpen, setOpen] = useState(true);

  useEffect(() => {
    if (isMyPageOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isMyPageOpen]);

  return (
    <>
      <MetaTag
        title='리크루트 - 전통주와 함께하는 새로운 경험'
        description='리크루트 메인 페이지에서 전통주와 관련된 다양한 정보를 만나보세요.'
        keywords='리크루트, 전통주, 메인 페이지'
        imgsrc={IMAGES.banner}
        url='https://www.licruit.site'
      />
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
