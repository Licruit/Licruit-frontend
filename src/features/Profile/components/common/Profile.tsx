import styled from 'styled-components';
import Button from '@/components/Button/Button';
import useMyPageSideMenuStore from '@/store/mypageSideMenuStore';
import { GetProfile } from '../../model/profile.model';

interface Props {
  userProfile: GetProfile;
}

function Profile({ userProfile }: Props) {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  return (
    <ProfileContainer>
      <ProfileInfoWrapper>
        <img src={userProfile?.img} alt='profile' />
        <ProfileInfo>
          <Name>{userProfile?.businessName}</Name>
          <BusinessNumber>{userProfile?.companyNumber}</BusinessNumber>
        </ProfileInfo>
      </ProfileInfoWrapper>
      <Button
        $style='outlined'
        $size='sm'
        $theme='neutral'
        onClick={() => setContent('edit-profile')}
      >
        프로필 관리
      </Button>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  gap: 12px;

  img {
    width: 60px;
    height: 60px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
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
