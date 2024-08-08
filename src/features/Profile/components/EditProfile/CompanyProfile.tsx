import styled from 'styled-components';
import Button from '@/components/Button/Button';

import { INPUT } from '../../constants/input';
import Label from '../common/Label';
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

function CompanyProfile() {
  const { profile, isError } = useProfileQuery('1', 'company');

  if (isError || !profile) {
    window.alert('잠시후 다시 시도해 주세요.');
    return;
  }

  return (
    <>
      <ProfileInput {...INPUT.shop} />
      <IntroduceWrapper>
        <Label {...INPUT.introduce} />
        <Introduce
          placeholder={profile.introduce || '내용을 입력해주세요'}
          maxLength={400}
        />
        <TypeNumber>9/400</TypeNumber>
      </IntroduceWrapper>
      <ProfileInput {...INPUT.url} />
      <ProfileInput {...INPUT.address} />
      <ProfileInput {...INPUT.contact} />
      <CategoryButtons categories={category} />

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
