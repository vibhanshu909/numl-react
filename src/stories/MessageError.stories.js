import React from 'react';

import Root from '../components/Root';
import MessageError from '../Atoms/MessageError';
import Icon from '../Atoms/Icon';

import { THEMES } from '../helpers';

export default {
  title: 'Example/Atoms/MessageError',
  component: MessageError,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    theme: {
      defaultValue: undefined,
      control: {
        type: 'select',
        options: [undefined, ...THEMES],
      },
    },
    message: {
      defaultValue: 'This is not valid',
      control: {
        type: 'text',
      },
    },
    icon: {
      defaultValue: 'alert-circle-outline',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <MessageError {...args} />
  </Root>
);

export const Basic = Template.bind({});
Basic.args = {
  icon: <Icon name="information-circle-outline"></Icon>,
};
