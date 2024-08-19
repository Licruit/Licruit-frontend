import styled from 'styled-components';
import { Divider } from '@/styles/components/Divider';
import Button from '@/components/Button/Button';
import CounterBox from './CounterBox';

function GroupBuyingForm() {
  return (
    <Form>
      <FormBox>
        <OptionName>
          <span>
            백경 13. 탁주 <strong>(+16,000원)</strong>
          </span>
        </OptionName>
        <Divider />
        <CounterBox />
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

  strong {
    color: ${({ theme }) => theme.color.primary[500]};
  }
`;
