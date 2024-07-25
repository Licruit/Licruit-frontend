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
  children: React.ReactNode;
  onSubmit: SubmitHandler<FormType>;
  formOptions?: UseFormProps<FormType>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function GenericForm<FormType extends FieldValues>({
  children,
  onSubmit,
  formOptions,
  setStep,
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
        <Button
          type='button'
          disabled={!isValid}
          $style='solid'
          $theme='primary'
          $width='full'
          $size='lg'
          onClick={() => setStep((prev) => prev + 1)}
        >
          다음
        </Button>
      </Form>
    </FormProvider>
  );
}

export default GenericForm;

const Form = styled.form`
  width: 100%;
  height: 520px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;
