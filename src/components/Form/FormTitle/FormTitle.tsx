import { FORM_TITLE } from '@/constants/form/formTitle';
import styled from 'styled-components';

interface Props {
  type: keyof typeof FORM_TITLE;
  step?: number;
}

function FormTitle({ type, step = 1 }: Props) {
  const data = FORM_TITLE[type];

  return (
    <Container>
      <h1>{data.title}</h1>
      <p>{data.step[step]}</p>
    </Container>
  );
}

export default FormTitle;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 100%;
  margin-bottom: 24px;

  h1 {
    width: 100%;
    color: ${({ theme }) => theme.color.neutral[900]};
    text-align: center;
    ${({ theme }) => theme.typo.heading.extra_bold[36]}
  }

  p {
    width: 100%;
    color: ${({ theme }) => theme.color.neutral[400]};
    text-align: center;
    white-space: pre-wrap;
    ${({ theme }) => theme.typo.body.medium[14]}
  }
`;
