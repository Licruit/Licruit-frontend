import { CloseIcon } from 'public/assets/icons';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import useMyPageSideMenuStore from '@/store/mypageSideMenuStore';
import MyPageHeader from '../common/MyPageHeader';
import ProfileInput from '../common/ProfileInput';
import Label from '../common/Label';
import CategoryButtons from '../EditProfile/CategoryButtons';
import { LABEL } from '../../constants/label';

// TODO 추후 서버 연결시 서버 데이터로 대체 예정
const LOCATION = [
  '경기도',
  '강원도',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상남도',
  '경상북도',
  '제주도',
];

function GroupBuy() {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  return (
    <>
      <MyPageHeader
        title='공동구매 올리기'
        icon={
          <CloseIcon
            fill='#000'
            style={{ cursor: 'pointer' }}
            onClick={() => setContent('my-page')}
          />
        }
      />
      <ProfileInput
        label={LABEL.product}
        placeholder='백경 13'
        isRequired
        isSearch
      />
      <InputWrapper>
        <ProfileInput
          label={LABEL.period}
          placeholder='2024.07.21~2024.09.11'
          isRequired
        />
        <ProfileInput label={LABEL.startTime} placeholder='09:00' isRequired />
      </InputWrapper>
      <InputWrapper>
        <ProfileInput
          label={LABEL.delivery}
          placeholder='2024.07.21~2024.09.11'
          isRequired
        />
        <ProfileInput label={LABEL.price} placeholder='16,000' isRequired />
      </InputWrapper>
      <ProfileInput label={LABEL.min} placeholder='100' isRequired />
      <ProfileInput label={LABEL.max} placeholder='1000' isRequired />
      <InputWrapper>
        <ProfileInput
          label={LABEL.deliveryFee}
          placeholder='3,000'
          isRequired
        />
        <ProfileInput
          label={LABEL.freeDelivery}
          placeholder='100,000'
          hasInfo
        />
      </InputWrapper>
      <LabelWrapper>
        <Label label={LABEL.location} />
        <span className='isRequired'>*</span>
        <p className='desc'>(배송 가능 지역만 선택해 주세요)</p>
      </LabelWrapper>
      <CategoryButtons categories={LOCATION} />
      <ProfileInput
        label={LABEL.groupBuy}
        placeholder='제목을 입력해 주세요'
        isRequired
        hasValidation
      />
      <Button $style='solid' $theme='primary' $width='full' $size='md'>
        적용하기
      </Button>
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;

  gap: 10px;
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: 5px;

  .isRequired {
    color: ${({ theme }) => theme.color.primary[500]};
  }

  .desc {
    color: ${({ theme }) => theme.color.neutral[600]};
    ${({ theme }) => theme.typo.body.medium[12]}
  }
`;

export default GroupBuy;
