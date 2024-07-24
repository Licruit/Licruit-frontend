import { FORM_TITLE } from '@/constants/formTitle';
import styled from 'styled-components';

interface Props {
  type: keyof typeof FORM_TITLE;
  step?: keyof (typeof FORM_TITLE)[keyof typeof FORM_TITLE];
}

function FormTitle({ type, step = 1 }: Props) {
  const { title, description } = FORM_TITLE[type][step];

  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
}

export default FormTitle;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  h1 {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.color.neutral[900]};
    ${({ theme }) => theme.typo.heading.extra_bold[36]}
  }
  p {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.color.neutral[400]};
    white-space: pre-wrap;
    ${({ theme }) => theme.typo.body.medium[14]}
  }
`;
