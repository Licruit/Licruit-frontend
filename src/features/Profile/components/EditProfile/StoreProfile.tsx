import Button from '@/components/Button/Button';

import styled from 'styled-components';
import { LABEL } from '../../constants/label';
import ProfileInput from '../common/ProfileInput';
import CategoryButtons from './CategoryButtons';

function StoreProfile() {
  return (
    <>
      <ProfileInput
        label={LABEL.shop}
        placeholder='최근학'
        isRequired
        hasValidation
      />
      <ProfileInput
        label={LABEL.contact}
        placeholder='010-0000-0000'
        isRequired
      />
      <ProfileInput
        label={LABEL.address}
        placeholder='대전광역시 동구 삼성동 000-00'
      />
      <CategoryButtons />
      <ButtonContainer>
        <Button $style='solid' $theme='primary' $size='md' $width='full'>
          적용하기
        </Button>
      </ButtonContainer>
      <SignOut>회원탈퇴</SignOut>
    </>
  );
}

const ButtonContainer = styled.div`
  margin-top: 28px;
`;

const SignOut = styled.p`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => theme.typo.body.medium[12]};
  color: ${({ theme }) => theme.color.neutral[400]};
  text-decoration: underline;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.neutral[900]};
  }
`;

export default StoreProfile;
