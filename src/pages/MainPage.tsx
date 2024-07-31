import BestSale from '@/features/Main/components/BestSale/BestSale';
import BrandNew from '@/features/Main/components/BrandNew/BrandNew';
import JoinUs from '@/features/Main/components/JoinUs/JoinUs';
import Rate from '@/features/Main/components/Rate/Rate';

import { IMAGES } from '@/constants/images';
import { Banner } from '@/styles/components/Banner';

function MainPage() {
  return (
    <>
      <Banner $imageUrl={IMAGES.banner} />
      <BestSale />
      <Rate />
      <JoinUs />
      <BrandNew />
    </>
  );
}

export default MainPage;
