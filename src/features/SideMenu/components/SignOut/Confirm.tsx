import { CheckIcon } from 'public/assets/icons';
import styled, { useTheme } from 'styled-components';
import { useState } from 'react';
import { SignOutDescription } from '@/styles/components/Description';
import { formatCompanyNumber } from '@/features/LiquorDetail/utils/formatCompanyNumber';
import CancelAndNext from '../common/CancelAndNext';

interface Props {
  companyNumber?: number;
  onNext: () => void;
}

function Confirm({ companyNumber, onNext }: Props) {
  const theme = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <SignOutDescription>
        탈퇴 후에는 사업자 등록번호
        {companyNumber ? formatCompanyNumber(companyNumber) : ''}과 관련된 모든
        데이터는 복구되지 않습니다
      </SignOutDescription>
      <CheckWrapper
        $isChecked={isChecked}
        onClick={() => setIsChecked((prev) => !prev)}
      >
        <CheckIcon
          width={20}
          height={20}
          fill={isChecked ? theme.color.primary[500] : theme.color.neutral[400]}
        />
        안내사항을 모두 확인하였으며, 이에 동의합니다.
      </CheckWrapper>
      <CancelAndNext isValid={isChecked} onNext={onNext} />
    </>
  );
}

const CheckWrapper = styled.div<{ $isChecked: boolean }>`
  cursor: pointer;

  display: flex;
  gap: 15px;
  align-items: center;

  width: 100%;
  padding-left: 10px;

  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme, $isChecked }) =>
    $isChecked ? theme.color.primary[500] : theme.color.neutral[400]};
`;

export default Confirm;
