import styled from 'styled-components';

interface Props {
  label: string;
  isRequired?: boolean;
  extraDesc?: boolean;
}

function Label({ label, isRequired, extraDesc }: Props) {
  return (
    <StyledLabel>
      {label} {isRequired && <span className='require'>*</span>}{' '}
      {extraDesc && <p className='desc'>(배송 가능 지역만 선택해 주세요)</p>}
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

  .desc {
    color: ${({ theme }) => theme.color.neutral[600]};
    ${({ theme }) => theme.typo.body.medium[12]}
  }
`;

export default Label;
