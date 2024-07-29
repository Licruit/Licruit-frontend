import Banner from '@/features/Main/components/Banner';
import BestSale from '@/features/Main/components/BestSale/BestSale';
import BrandNew from '@/features/Main/components/BrandNew/BrandNew';
import JoinUs from '@/features/Main/components/JoinUs/JoinUs';
import Rate from '@/features/Main/components/Rate/Rate';

function MainPage() {
  return (
    <>
      <Banner />
      <BestSale />
      <Rate />
      <JoinUs />
      <BrandNew />
    </>
  );
}

export default MainPage;
