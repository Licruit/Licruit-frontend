import { ReactNode, ReactElement } from 'react';

export interface StepProps {
  stepNum: number;
  children?: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export interface ProcessProps {
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  Step: ({ children }: StepProps) => JSX.Element;
}
