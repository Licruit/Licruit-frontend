import Button from '@/components/Button/Button';
import { BackIcon, EditIcon } from 'public/assets/icons';
import styled from 'styled-components';
import MockProfile from 'public/assets/images/mock-profile.svg';
import { ProfileContainer } from '@/styles/components/Container';
import MyPageHeader from '../common/MyPageHeader';
// import StoreProfile from './StoreProfile';
import CompanyProfile from './CompanyProfile';

interface Props {
  onClose: () => void;
}

function EditProfile({ onClose }: Props) {
  return (
    <ProfileContainer>
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
      {/* TODO 사용자 정보에 따른 다른 수정 페이지 보여주기 */}
      {/* <StoreProfile /> */}
      <CompanyProfile />
    </ProfileContainer>
  );
}

const ImageEditWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default EditProfile;
