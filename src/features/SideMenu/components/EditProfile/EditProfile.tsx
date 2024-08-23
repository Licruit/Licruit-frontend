import Button from '@/components/Button/Button';
import { BackIcon, EditIcon } from 'public/assets/icons';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import MyPageHeader from '../common/MyPageHeader';
import EditProfileForm from './EditProfileForm';
import useProfileImageMutation from '../../hooks/useProfileImageMutaion';
import useProfileQuery from '../../hooks/useProfileQuery';

function EditProfile() {
  const { mutate: uploadProfileImage } = useProfileImageMutation();
  const { data: userProfile, isError } = useProfileQuery();
  const [imageUrl, setImageUrl] = useState<string>(userProfile?.img || '');
  const [image, setImage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  if (!userProfile) return null;
  if (isError) toast.error('잠시후 다시 시도해 주세요.'); // TODO: error boundary 활용

  const handleUploadImageButtonClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const upLoadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => setImageUrl(String(reader.result));

    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    uploadProfileImage(formData, {
      onSuccess: (res) => {
        setImage(res.data.imgUrl);
      },
    });
  };

  return (
    <>
      <MyPageHeader
        title='프로필 관리'
        icon={
          <BackIcon
            style={{ cursor: 'pointer' }}
            onClick={() => setContent('my-page')}
          />
        }
      />
      <ImageEditWrapper>
        <img src={imageUrl} alt='profile' />
        <Button
          $size='sm'
          $width='full'
          $theme='neutral'
          $style='outlined'
          onClick={handleUploadImageButtonClick}
        >
          <EditIcon fill='#000' /> 이미지 업로드
        </Button>
        <UploadImageInput
          type='file'
          accept='image/*'
          ref={inputRef}
          onChange={upLoadImage}
        />
      </ImageEditWrapper>
      <EditProfileForm userProfile={userProfile} image={image} />
    </>
  );
}

const ImageEditWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
  }
`;

const UploadImageInput = styled.input`
  display: none;
`;

export default EditProfile;
