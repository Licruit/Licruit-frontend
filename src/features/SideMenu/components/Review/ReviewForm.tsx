import Button from '@/components/Button/Button';
import { GlassIcon } from 'public/assets/icons';
import styled, { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { INPUT } from '../../constants/input';
import Label from '../common/Label';
import ProfileInput from '../common/ProfileInput';

function ReviewForm() {
  const [rate, setRate] = useState<number>(1);
  const theme = useTheme();
  const methods = useForm();

  const handleClickRateIcon = (rateNumber: number) => {
    setRate(rateNumber + 1);
  };

  const { register } = methods;
  return (
    <>
      <ProfileInput {...INPUT.title} name='title' isRequired />
      <IntroduceWrapper>
        <Label {...INPUT.content} />
        <Introduce
          placeholder='내용을 입력해주세요'
          maxLength={400}
          {...register('content', { required: true })}
        />
        <Notice>
          <strong>리뷰 작성 전 유의사항을 꼭 확인해 주세요 ! </strong>
          사용자와 도매업자에게 상처를 줄 수 있는 욕설, 비방, 명예훼손성 표현은
          삼가해 주세요. 리크루트와 함께 상생하는 리뷰 문화를 만들어 갑시다.
        </Notice>
      </IntroduceWrapper>
      <SatisfyWrapper>
        <LabelWrapper>
          <Label label='만족도' isRequired />
          <Description>
            해당 전통주에 만족하셨나요? 와인잔을 선택해 평점을 남겨주세요 !
          </Description>
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
      <Button $style='solid' $theme='primary' $size='lg' $width='full'>
        작성하기
      </Button>
    </>
  );
}

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
