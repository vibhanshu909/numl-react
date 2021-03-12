import React from 'react';
import ProgressBar from '../Atoms/ProgressBar';
import Root from '../components/Root';

export default {
  title: 'Example/Atoms/ProgressBar',
  component: ProgressBar,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg', undefined],
      },
    },
    min: {
      control: {
        type: 'text',
      },
    },
    max: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => <Root>{<ProgressBar {...args} />}</Root>;

export const Default = Template.bind({});
