import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function HeaderInfo({ children }: Props) {
  return <StyledHeaderInfo>{children}</StyledHeaderInfo>;
}

const StyledHeaderInfo = styled.div`
  width: 100%;
  padding: 20px;

  color: ${({ theme }) => theme.color.neutral[50]};
  font-size: ${({ theme }) => theme.typo.heading.bold[16]};

  background: ${({ theme }) => theme.color.primary[500]};
`;

export default HeaderInfo;
