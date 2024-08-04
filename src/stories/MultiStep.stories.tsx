/* eslint-disable react/function-component-definition */

import MultiStep, { MultiStepProps } from '@/components/Form/MultiStep';
import theme from '@/styles/theme';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Components/MultiStep',
  component: MultiStep,
  argTypes: {
    current: { control: { type: 'number', min: 1, max: 5 } },
    maxStep: { control: { type: 'number', min: 1, max: 5 } },
  },
} as Meta;

const Template: StoryFn<MultiStepProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <MultiStep {...args} />
    </ThemeProvider>
  );
};

export const Stepper = Template.bind({});
Stepper.args = {
  current: 1,
  maxStep: 5,
};

Stepper.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/k3f805hMQ8UEAQdXUus6tp/LICRUIT?node-id=596-822&t=aTTf7p7S9lG7zEbZ-1',
  },
};
