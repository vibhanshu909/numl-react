import React from 'react';
import Button from '../Atoms/Button';
import Icon from '../Atoms/Icon';

import Root from '../components/Root';
import EmptyState from '../Molecules/EmptyState';

export default {
  title: 'Example/Molecules/EmptyState',
  component: EmptyState,
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <EmptyState {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  border: '1bw',
  fill: 'bg',
  padding: '2x',
  height: 'min 40x',
  content: 'center',
  heading: 'You need permission to view this page',
  description: 'Email the account owner to get access to this page.',
  actions: [
    <Button key="1" special>
      Request Access
    </Button>,
  ],
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  border: '1bw',
  fill: 'bg',
  padding: '2x',
  height: 'min 40x',
  content: 'center',
  heading: 'You need permission to view this page',
  description: 'Email the account owner to get access to this page.',
  actions: [
    <Button key="1" special>
      Request Access
    </Button>,
  ],
  children: <Icon name="search" size="5x" />,
};

export const WithImage = Template.bind({});
WithImage.args = {
  border: '1bw',
  fill: 'bg',
  padding: '2x',
  height: 'min 50x',
  content: 'center',
  heading: 'You need permission to view this page',
  description: 'Email the account owner to get access to this page.',
  actions: [
    <Button key="1">
      <Icon name="swap-vertical-outline" /> Import products
    </Button>,
    <Button key="2" special>
      Request Access
    </Button>,
  ],
  children: (
    <nu-img
      src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
      fit="fill"
      width="14x"
      height="14x"
    ></nu-img>
  ),
};
