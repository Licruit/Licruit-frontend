import { CloseIcon } from 'public/assets/icons';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { FormProvider, useForm } from 'react-hook-form';
import { REGEXP } from '@/constants/form/form';
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
import { GroupBuyForm } from '../../types/groupbuyopenform';

function GroupBuyOpenForm() {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);
  const { handleGroupBuyOpen } = useGroupBuyMutation();

  const methods = useForm<GroupBuyForm>({
    mode: 'onChange',
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = methods;

  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={handleSubmit((data) => {
          handleGroupBuyOpen(data);
        })}
      >
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
          <DatePickerComponent
            {...INPUT.period}
            name='dates'
            minDate={new Date()}
          />
          <TimePickerComponent {...INPUT.startTime} name='time' />
        </InputWrapper>
        <InputWrapper>
          <DatePickerComponent
            {...INPUT.delivery}
            name='deliveryDates'
            minDate={watch('dates') ? watch('dates')[1] : null}
          />
          <ProfileInput
            {...INPUT.price}
            {...register('price', { required: true })}
            isPrice
          />
        </InputWrapper>
        <ProfileInput
          {...INPUT.min}
          {...register('totalMin', {
            required: true,
            pattern: REGEXP.isNumber,
          })}
        />
        <ProfileInput
          {...INPUT.max}
          {...register('totalMax', { pattern: REGEXP.isNumber })}
        />
        <InputWrapper>
          <ProfileInput
            {...INPUT.deliveryFee}
            {...register('deliveryFee', { required: true })}
            isPrice
          />
          <ProfileInput
            {...INPUT.freeDelivery}
            {...register('freeDeliveryFee')}
            isPrice
          />
        </InputWrapper>
        <RegionsButtons {...register('regions', { required: true })} />
        <ProfileInput
          {...INPUT.groupBuy}
          maxLength={40}
          value={watch('title')}
          {...register('title', { required: true, max: 40 })}
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
