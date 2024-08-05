import styled from 'styled-components';
import Button from '@/components/Button/Button';
import MockProfile from 'public/assets/images/mock-profile.svg';
import { useEditProfileModal } from '@/store/modal/useModalStore';

function Profile() {
  const openEditProfile = useEditProfileModal((state) => state.open);

  return (
    <ProfileContainer>
      <ProfileInfoWrapper>
        <img src={MockProfile} alt='profile' />
        <ProfileInfo>
          <Name>최근학</Name>
          <BusinessNumber>607-86-12034</BusinessNumber>
        </ProfileInfo>
      </ProfileInfoWrapper>
      <Button
        $style='outlined'
        $size='sm'
        $theme='neutral'
        onClick={openEditProfile}
      >
        프로필 관리
      </Button>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

const Name = styled.div`
  ${({ theme }) => theme.typo.heading.bold[18]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const BusinessNumber = styled.div`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

export default Profile;
