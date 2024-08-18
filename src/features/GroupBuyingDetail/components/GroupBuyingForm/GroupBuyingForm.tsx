import styled from 'styled-components';
import { FormProvider } from 'react-hook-form';
import { Divider } from '@/styles/components/Divider';
import Button from '@/components/Button/Button';
import CounterBox from './CounterBox';
import { GroupBuyingDetail } from '../../models/groupBuyingDetail.model';
import { useRegister } from '../../hooks/useRegister';

interface Props {
  detailData: GroupBuyingDetail;
}

function GroupBuyingForm({ detailData }: Props) {
  const { methods, handleRegister } = useRegister();

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit((data) => handleRegister(data))}>
        <FormBox>
          <OptionName>
            <span>{detailData.liquorName}</span>
          </OptionName>
          <Divider />
          <CounterBox detailData={detailData} />
        </FormBox>
        <Button
          type='submit'
          $style='solid'
          $size='lg'
          $width='full'
          $theme='primary'
        >
          구매 신청하기
        </Button>
      </Form>
    </FormProvider>
  );
}

export default GroupBuyingForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  background-color: ${({ theme }) => theme.color.neutral[100]};
`;

const OptionName = styled.div`
  width: 100%;
  padding: 20px;
  ${({ theme }) => theme.typo.body.medium[14]}
  color: ${({ theme }) => theme.color.neutral[600]};
`;
