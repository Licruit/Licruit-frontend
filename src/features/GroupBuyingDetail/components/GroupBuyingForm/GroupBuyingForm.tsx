import styled from 'styled-components';
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
        <hr className='divider' />
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.neutral[100]};

  .divider {
    border: 0;
    width: 100%;
    height: 1px;
    margin: 0;
    background: ${({ theme }) => theme.color.neutral[400]};
  }
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
