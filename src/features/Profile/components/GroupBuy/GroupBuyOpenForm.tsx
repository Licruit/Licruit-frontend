import { CloseIcon } from 'public/assets/icons';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import useMyPageSideMenuStore from '@/store/mypageSideMenuStore';
import { FormProvider, useForm } from 'react-hook-form';
import MyPageHeader from '../common/MyPageHeader';
import ProfileInput from '../common/ProfileInput';
import { INPUT } from '../../constants/input';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerComponent from './DatePickerComponent';
import TimePickerComponent from './TimePickerComponent';
import Label from '../common/Label';
import RegionsButtons from './RegionsButtons';

interface Form {
  liquorId: number;
  dates: Date[];
  openTime: string;
  deliveryDates: Date[];
  totalMin: number;
  totalMax: number;
  individualMin: number;
  price: number;
  deliveryFee: number;
  freeDeliveryFee?: number;
  title: string;
  content: string;
  regions: string[];
}

function GroupBuyOpenForm() {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  const methods = useForm<Form>({ mode: 'onChange' });

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = methods;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit((data) => console.log(data))}>
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
          {...INPUT.product}
          {...register('liquorId', { required: true })}
        />
        <InputWrapper>
          <DatePickerComponent {...INPUT.period} name='dates' />
          <TimePickerComponent {...INPUT.startTime} name='time' />
        </InputWrapper>
        <InputWrapper>
          <DatePickerComponent {...INPUT.delivery} name='deliveryDates' />
          <ProfileInput
            {...INPUT.price}
            {...register('price', { required: true })}
          />
        </InputWrapper>
        <ProfileInput
          {...INPUT.min}
          {...register('totalMin', { required: true })}
        />
        <ProfileInput
          {...INPUT.max}
          {...register('totalMax', { required: true })}
        />
        <InputWrapper>
          <ProfileInput
            {...INPUT.deliveryFee}
            {...register('deliveryFee', { required: true })}
          />
          <ProfileInput
            {...INPUT.freeDelivery}
            {...register('freeDeliveryFee')}
          />
        </InputWrapper>
        <RegionsButtons {...register('regions', { required: true })} />
        <ProfileInput
          {...INPUT.groupBuy}
          {...register('title', { required: true })}
        />
        <IntroduceWrapper>
          <Label {...INPUT.content} extraDesc />
          <Introduce
            placeholder='내용을 입력해주세요'
            maxLength={400}
            {...register('content', { required: true })}
          />
        </IntroduceWrapper>
        <Button
          $style='solid'
          $theme='primary'
          $width='full'
          $size='md'
          disabled={!isValid}
        >
          적용하기
        </Button>
      </Form>
    </FormProvider>
  );
}

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Introduce = styled.textarea`
  resize: none;

  width: 100%;
  height: 200px;
  padding: 17px 0 0 18px;

  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
`;

export default GroupBuyOpenForm;
