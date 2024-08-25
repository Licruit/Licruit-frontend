import { BestSale, Rate, JoinUs, BrandNew } from '@/features/Main';
import { IMAGES } from '@/constants/images';
import { Banner } from '@/styles/components/Banner';
import MyPageSideMenu from '@/features/SideMenu/components/Mypage/MyPageSideMenu';
import MetaTag from '@/components/MetaTag';
import { useMyPageIsOpenStore } from '@/store/mypageSideMenuStore';

function MainPage() {
  const { isOpen, close } = useMyPageIsOpenStore();

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
      {isOpen && <MyPageSideMenu onClose={close} />}
    </>
  );
}

export default MainPage;
