import styled from 'styled-components';

interface Props {
  label: string;
  value: string | JSX.Element | undefined;
}

function InfoItem({ label, value }: Props) {
  return (
    <ListItem>
      {label} : {value}
    </ListItem>
  );
}

export default InfoItem;

const ListItem = styled.li`
  ${({ theme }) => theme.typo.body.medium[14]};
  word-break: break-all;

  a {
    color: ${({ theme }) => theme.color.primary[500]};
    text-decoration: underline;
  }
`;
