import styled from 'styled-components';
import Button from '@/components/Button/Button';
import { useEditProfileModal } from '@/store/modal/useModalStore';
import { LABEL } from '../../constants/label';
import Label from '../common/Label';
import ProfileInput from '../common/ProfileInput';
import CategoryButtons from './CategoryButtons';
import useProfileQuery from '../../hooks/useProfileQuery';

function CompanyProfile() {
  const closeEditProfile = useEditProfileModal((state) => state.close);
  const { profile, isError } = useProfileQuery('1', 'company');

  if (isError || !profile) {
    window.alert('잠시후 다시 시도해 주세요.');
    closeEditProfile();
    return;
  }

  return (
    <>
      <ProfileInput
        label={LABEL.shop}
        placeholder={profile.business_name}
        isRequired
        hasValidation
      />
      <IntroduceWrapper>
        <Label label={LABEL.introduce} />
        <Introduce
          placeholder={profile.introduce || '내용을 입력해주세요'}
          maxLength={400}
        />
        <TypeNumber>9/400</TypeNumber>
      </IntroduceWrapper>
      <ProfileInput
        label={LABEL.url}
        placeholder={profile.homepage || '업체 사이트 주소를 입력해 주세요'}
      />
      <ProfileInput label={LABEL.address} placeholder={profile.address || ''} />
      <ProfileInput
        label={LABEL.contact}
        placeholder='010-0000-0000'
        isRequired
      />
      <CategoryButtons />

      <Button $style='solid' $theme='primary' $size='md' $width='full'>
        적용하기
      </Button>
    </>
  );
}

const IntroduceWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Introduce = styled.textarea`
  width: 100%;
  height: 200px;

  padding: 17px 0 0 18px;

  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  resize: none;
`;

const TypeNumber = styled.div`
  position: absolute;
  bottom: 17px;
  right: 18px;

  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

export default CompanyProfile;
