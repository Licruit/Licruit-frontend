import { CloseIcon } from 'public/assets/icons';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import useMyPageSideMenuStore from '@/store/mypageSideMenuStore';
import { FormProvider, useForm } from 'react-hook-form';
import { format } from 'date-fns';
import MyPageHeader from '../common/MyPageHeader';
import ProfileInput from '../common/ProfileInput';
import { INPUT } from '../../constants/input';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerComponent from './DatePickerComponent';
import TimePickerComponent from './TimePickerComponent';
import Label from '../common/Label';
import RegionsButtons from './RegionsButtons';
import SearchProduct from './SearchProduct';
import useGroupBuyMutation from '../../hooks/useGroupBuyMutation';

interface Form {
  liquor: { name: string; id: number };
  dates: Date[];
  time: string;
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
  const { mutate: postGroupBuy } = useGroupBuyMutation();

  const methods = useForm<Form>({
    mode: 'onChange',
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = methods;

  const handleOnSubmit = (data: Form) => {
    const req = {
      openDate: format(data.dates[0], 'yyyy-MM-dd'),
      deadline: format(data.dates[1], 'yyyy-MM-dd'),
      openTime: format(data.time, 'HH:mm'),
      deliveryStart: format(data.deliveryDates[0], 'yyyy-MM-dd'),
      deliveryEnd: format(data.deliveryDates[1], 'yyyy-MM-dd'),
      totalMin: Number(data.totalMin),
      totalMax: Number(data.totalMax),
      price: Number(data.price),
      deliveryFee: Number(data.deliveryFee),
      freeDeliveryFee: Number(data.freeDeliveryFee),
      title: data.title,
      content: data.content,
      liquorId: data.liquor.id,
      regions: data.regions,
    };

    postGroupBuy(req);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit((data) => handleOnSubmit(data))}>
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
        <SearchProduct {...register('liquor', { required: true })} />
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
          maxLength={40}
          value={watch('title')}
          {...register('title', { required: true, max: 25 })}
        />
        <IntroduceWrapper>
          <Label {...INPUT.content} />
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
