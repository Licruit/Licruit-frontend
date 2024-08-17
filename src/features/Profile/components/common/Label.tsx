import styled from 'styled-components';

interface Props {
  label: string;
  isRequired?: boolean;
}

function Label({ label, isRequired }: Props) {
  return (
    <StyledLabel>
      {label} {isRequired && <span className='require'>*</span>}
    </StyledLabel>
  );
}

const StyledLabel = styled.div`
  display: flex;
  gap: 5px;
  ${({ theme }) => theme.typo.body.semi_bold[14]};
  color: ${({ theme }) => theme.color.neutral[900]};

  .require {
    color: ${({ theme }) => theme.color.primary[500]};
  }
`;

export default Label;
