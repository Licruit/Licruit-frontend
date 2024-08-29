import { IMAGES } from '@/constants/images';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import { useRef, useState } from 'react';
import BannerSlide from './BannerSlide';

function Banner() {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_, next) => {
      setActiveSlide(next);
    },
  };

  const handleBarClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <Container>
      <img
        className='main-banner'
        src={IMAGES.banner}
        alt='banner'
        loading='eager'
      />
      <Slider {...settings} ref={sliderRef}>
        <BannerSlide slideNumber={0} />
        <BannerSlide slideNumber={1} />
      </Slider>
      <BarContainer>
        <Bar $isCurrent={activeSlide === 0} onClick={() => handleBarClick(0)} />
        <Bar $isCurrent={activeSlide === 1} onClick={() => handleBarClick(1)} />
      </BarContainer>
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 480px;
  position: relative;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 24px;

  .main-banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -10;
  }
`;

const BarContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const Bar = styled.div<{ $isCurrent: boolean }>`
  height: 4px;
  background-color: ${({ theme }) => theme.color.neutral[900]};
  opacity: ${({ $isCurrent }) => ($isCurrent ? 1 : 0.4)};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;
