import styled from 'styled-components';

import { IMAGES } from '@/constants/images';

function Banner() {
  return <BannerContainer src={IMAGES.banner} />;
}

const BannerContainer = styled.img`
  width: 100%;
  height: 480px;
`;

export default Banner;
