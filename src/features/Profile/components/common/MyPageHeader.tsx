import styled from 'styled-components';

interface Props {
  title: string;
  icon: React.ReactNode;
}

function MyPageHeader({ title, icon }: Props) {
  return (
    <Header>
      <Title>{title}</Title>
      {icon}
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[36]};
  color: ${({ theme }) => theme.color.common[0]};
`;

export default MyPageHeader;
