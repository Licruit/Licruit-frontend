import Button from '@/components/Button/Button';

import styled from 'styled-components';
import { INPUT } from '../../constants/input';
import ProfileInput from '../common/ProfileInput';
import CategoryButtons from './CategoryButtons';
import useProfileQuery from '../../hooks/useProfileQuery';

// TODO 서버 데이터로 변경하기
const category = [
  '한식',
  '일식',
  '양식',
  '중식',
  '이자카야',
  '요리주점',
  '레스토랑',
  '도매업체',
  '기타',
];

function StoreProfile() {
  const { profile, isError } = useProfileQuery('1', 'shop');

  if (isError || !profile) return null;

  return (
    <>
      <ProfileInput {...INPUT.shop} />
      <ProfileInput {...INPUT.contact} />
      <ProfileInput {...INPUT.address} />
      <CategoryButtons categories={category} />
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
