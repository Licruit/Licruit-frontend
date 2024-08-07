import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 500px;
  height: 100%;

  padding: 20px;

  position: absolute;
  right: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 20px;

  overflow: scroll;

  background: ${({ theme }) => theme.color.common[100]};
`;
