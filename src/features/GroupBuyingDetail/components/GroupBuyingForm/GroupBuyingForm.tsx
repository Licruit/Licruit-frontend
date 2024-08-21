import styled, { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import { FormProvider } from 'react-hook-form';
import { CheckIcon, WavingIcon } from 'public/assets/icons';
import { Divider } from '@/styles/components/Divider';
import Button from '@/components/Button/Button';
import CounterBox from './CounterBox';
import { GroupBuyingDetail } from '../../models/groupBuyingDetail.model';
import { useRegister } from '../../hooks/useRegister';

interface Props {
  detailData: GroupBuyingDetail;
}

function GroupBuyingForm({ detailData }: Props) {
  const theme = useTheme();
  const { id: buyingId } = useParams();
  const { methods, handleRegister } = useRegister(Number(buyingId));

  const { liquorName, isParticipated } = detailData;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit((data) => handleRegister(data))}>
        <FormBox>
          <OptionName>
            <span>{liquorName}</span>
          </OptionName>
          <Divider />
          <CounterBox detailData={detailData} />
        </FormBox>
        {isParticipated ? (
          <Button
            type='button'
            $style='solid'
            $size='lg'
            $width='full'
            $theme='primary'
            $disableHover
          >
            <CheckIcon fill={theme.color.common[100]} width={18} height={18} />
            구매 신청 완료
          </Button>
        ) : (
          <Button
            type='submit'
            $style='outlined'
            $size='lg'
            $width='full'
            $theme='primary'
          >
            <WavingIcon
              fill={theme.color.primary[500]}
              width={18}
              height={18}
            />
            구매 신청하기
          </Button>
        )}
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
