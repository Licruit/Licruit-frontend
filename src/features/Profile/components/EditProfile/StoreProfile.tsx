import Button from '@/components/Button/Button';

import styled from 'styled-components';
import { LABEL } from '../../constants/label';
import ProfileInput from '../common/ProfileInput';
import CategoryButtons from './CategoryButtons';
import useProfileQuery from '../../hooks/useProfileQuery';

function StoreProfile() {
  const { profile, isError } = useProfileQuery('1', 'shop');

  if (isError || !profile) return null;

  return (
    <>
      <ProfileInput
        label={LABEL.shop}
        placeholder={profile.business_name}
        isRequired
        hasValidation
      />
      <ProfileInput
        label={LABEL.contact}
        placeholder={profile.contact}
        isRequired
      />
      <ProfileInput label={LABEL.address} placeholder={profile.address || ''} />
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
