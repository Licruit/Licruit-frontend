import styled from 'styled-components';
import BannerUrl from 'public/assets/images/main/main-banner.svg';

function Banner() {
  return <BannerContainer />;
}

const BannerContainer = styled.div`
  width: 1400px;
  height: 480px;
  background: url(${BannerUrl}) lightgray 50% / cover no-repeat;
`;

export default Banner;
