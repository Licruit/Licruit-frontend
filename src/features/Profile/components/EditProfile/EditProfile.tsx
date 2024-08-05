import Button from '@/components/Button/Button';
import { BackIcon, EditIcon } from 'public/assets/icons';
import styled from 'styled-components';
import MockProfile from 'public/assets/images/mock-profile.svg';
import MyPageHeader from '../common/MyPageHeader';
import ProfileInput from '../common/ProfileInput';
import CategoryButtons from './CategoryButtons';
import { LABEL } from '../../constants/label';

interface Props {
  onClose: () => void;
}

function EditProfile({ onClose }: Props) {
  return (
    <EditProfileContainer>
      <MyPageHeader
        title='프로필 관리'
        icon={<BackIcon style={{ cursor: 'pointer' }} onClick={onClose} />}
      />
      <ImageEditWrapper>
        <img src={MockProfile} alt='profile' />
        <Button $size='sm' $width='full' $theme='neutral' $style='outlined'>
          <EditIcon fill='#000' /> 이미지 업로드
        </Button>
      </ImageEditWrapper>
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
    </EditProfileContainer>
  );
}

const EditProfileContainer = styled.div`
  width: 500px;
  height: 100%;

  padding: 20px;

  position: absolute;
  right: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${({ theme }) => theme.color.common[100]};
`;

const ImageEditWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

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

export default EditProfile;
