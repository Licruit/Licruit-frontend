import styled from 'styled-components';

export const Banner = styled.img<{ $imageUrl: string }>`
  width: 100%;
  height: 480px;
  background: url(${({ $imageUrl }) => $imageUrl}) lightgray 50% / cover
    no-repeat;
`;
