import styled from 'styled-components';
import Button from '@/components/Button/Button';
import useMyPageSideMenuStore from '@/store/mypageSideMenuStore';

interface Props {
  businessData: {
    businessName: string;
    businessNum: string;
    profileImage: string;
  };
}

function Profile({ businessData }: Props) {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  return (
    <ProfileContainer>
      <ProfileInfoWrapper>
        <img src={businessData.profileImage} alt='profile' />
        <ProfileInfo>
          <Name>{businessData.businessName}</Name>
          <BusinessNumber>{businessData.businessNum}</BusinessNumber>
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
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
