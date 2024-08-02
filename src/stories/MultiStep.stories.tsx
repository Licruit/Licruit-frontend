import MultiStep, {
  MultiStepProps,
} from '@/features/Auth/components/common/MultiStep';
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

const Template: StoryFn<MultiStepProps> = (args) => (
  <ThemeProvider theme={theme}>
    <MultiStep {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  current: 1,
  maxStep: 5,
};

export const StepTwo = Template.bind({});
StepTwo.args = {
  current: 2,
  maxStep: 5,
};

export const StepThree = Template.bind({});
StepThree.args = {
  current: 3,
  maxStep: 5,
};

export const StepFour = Template.bind({});
StepFour.args = {
  current: 4,
  maxStep: 5,
};

export const Complete = Template.bind({});
Complete.args = {
  current: 5,
  maxStep: 5,
};
