/* eslint-disable react/function-component-definition */
import { ReactElement, ReactNode, useState } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (defaultStep: string) => {
  const [step, setStep] = useState(defaultStep); // 현재 스텝

  // 각 단계 Step 컴포넌트
  const Step = ({ children }: StepProps) => {
    return <>{children}</>;
  };

  // 현재 활성화된 스텝을 렌더링하는 Funnel
  const Funnel = ({ children }: FunnelProps) => {
    const activeStep = children.find(
      (childStep) => childStep.props.name === step
    );

    return <>{activeStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step };
};
