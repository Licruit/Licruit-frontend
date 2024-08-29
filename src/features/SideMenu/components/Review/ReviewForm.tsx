import Button from '@/components/Button/Button';
import { GlassIcon } from 'public/assets/icons';
import styled, { useTheme } from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { INPUT } from '../../constants/input';
import Label from '../common/Label';
import ProfileInput from '../common/ProfileInput';
import { NOTICE } from '../../constants/notice';
import { DESCRIPTION } from '../../constants/description';
import useReviewMutation from '../../hooks/useReviewMutation';

interface Form {
  title: string;
  content: string;
}

function ReviewForm() {
  const [rate, setRate] = useState<number>(1);
  const { id } = useMyPageSideMenuStore((state) => state.props);
  const { mutate: postReview } = useReviewMutation();
  const theme = useTheme();
  const methods = useForm<Form>();

  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = methods;

  const handleClickRateIcon = (rateNumber: number) => {
    setRate(rateNumber + 1);
  };

  const handleOnSubmit = (data: Form) => {
    if (id && id !== null) {
      const req = {
        orderId: id,
        title: data.title,
        content: data.content,
        score: rate,
      };
      postReview(req);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit((data) => handleOnSubmit(data))}>
          <ProfileInput
            {...INPUT.title}
            isRequired
            {...register('title', { required: true })}
          />
          <IntroduceWrapper>
            <Label {...INPUT.content} />
            <Introduce
              placeholder='내용을 입력해주세요'
              maxLength={400}
              {...register('content', { required: true })}
            />
            <Notice>
              <strong>{NOTICE.strong}</strong>
              {NOTICE.normal}
            </Notice>
          </IntroduceWrapper>
          <SatisfyWrapper>
            <LabelWrapper>
              <Label label='만족도' isRequired />
              <Description>{DESCRIPTION.review}</Description>
            </LabelWrapper>
            <ReviewRateWrapper>
              {Array.from({ length: 5 }, (_, index) => index).map((item) => (
                <GlassIcon
                  key={item}
                  fill={
                    item < rate
                      ? theme.color.primary[500]
                      : theme.color.neutral[400]
                  }
                  width={42}
                  height={42}
                  onClick={() => handleClickRateIcon(item)}
                />
              ))}
              <CurrentRate>현재 {rate}잔이에요</CurrentRate>
            </ReviewRateWrapper>
          </SatisfyWrapper>
          <Button
            $style='solid'
            $theme='primary'
            $size='lg'
            $width='full'
            type='submit'
            disabled={!isValid}
          >
            작성하기
          </Button>
        </Form>
      </FormProvider>
    </>
  );
}

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

  &::placeholder {
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;

const Notice = styled.p`
  ${({ theme }) => theme.typo.body.medium[12]}
  color: ${({ theme }) => theme.color.neutral[300]};

  strong {
    color: ${({ theme }) => theme.color.primary[500]};
  }
`;

const SatisfyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Description = styled.h3`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[400]};
`;

const ReviewRateWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;

  svg {
    cursor: pointer;
  }
`;

const CurrentRate = styled.h3`
  color: ${({ theme }) => theme.color.primary[500]};
  ${({ theme }) => theme.typo.heading.bold[18]}
`;

export default ReviewForm;
