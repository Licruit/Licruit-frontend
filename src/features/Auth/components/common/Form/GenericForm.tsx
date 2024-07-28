import {
  useForm,
  FormProvider,
  SubmitHandler,
  UseFormProps,
  FieldValues,
} from 'react-hook-form';
import styled from 'styled-components';
import Button from '@/components/Button/Button';

interface FormInterface<FormType extends FieldValues> {
  children: React.ReactNode; // form contents
  caption?: React.ReactNode; // 버튼 아래 컴포넌트 (Login form)
  onSubmit: SubmitHandler<FormType>; // submit handler
  formOptions?: UseFormProps<FormType>; // useForm option
  setStep?: React.Dispatch<React.SetStateAction<number>> | undefined;
  isLastStep?: boolean; // 마지막 단계인지에 대한 여부
  isCheckVaild?: boolean;
}

function GenericForm<FormType extends FieldValues>({
  children,
  caption,
  onSubmit,
  formOptions,
  setStep = undefined,
  isLastStep = true,
  isCheckVaild = false,
}: FormInterface<FormType>) {
  const methods = useForm<FormType>(formOptions);
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {children}
        <div className='button-wrapper'>
          <Button
            type={isLastStep ? 'submit' : 'button'}
            disabled={!isValid || !isCheckVaild}
            $style='solid'
            $theme='primary'
            $width='full'
            $size='lg'
            onClick={
              isLastStep ? undefined : () => setStep!((prev) => prev + 1)
            }
          >
            {setStep ? '다음' : '로그인'}
          </Button>
          {caption}
        </div>
      </Form>
    </FormProvider>
  );
}

export default GenericForm;

const Form = styled.form`
  width: 100%;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 48px;

  .button-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;
