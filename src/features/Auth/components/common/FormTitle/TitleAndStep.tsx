import styled from 'styled-components';
import FormTitle from './FormTitle';
import MultiStep from '../MultiStep';

interface Props {
  currentStep: number;
  maxStep: number;
  formType: 'find_password' | 'signUp';
}

function TitleAndStep({ currentStep, maxStep, formType }: Props) {
  return (
    <Wrapper>
      <FormTitle type={formType} step={currentStep} />
      <MultiStep current={currentStep} maxStep={maxStep} />
    </Wrapper>
  );
}

export default TitleAndStep;

const Wrapper = styled.div`
  width: 100%;
`;
