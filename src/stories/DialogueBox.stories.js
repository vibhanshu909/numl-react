import React from 'react';

import DialogueBox from '../Molecules/DialogueBox';
import Button from '../Atoms/Button';
import Root from '../components/Root';
import Radio from '../Atoms/Radio';
import Avatar from '../Atoms/Avatar';

export default {
  title: 'Example/Molecules/DialogueBox',
  component: DialogueBox,
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Root>
    <DialogueBox {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  fill: 'bg',
  padding: '2x',
  border: '1bw',
  flow: 'column',
  heading: 'Reset Settings',
  children: 'This will reset your device to its default factor settings',
  actions: (
    <Button.Group>
      <Button key="Cancel">Cancel</Button>
      <Button key="Ok" clear>
        Ok
      </Button>
    </Button.Group>
  ),
};

export const WithRadioGroup = Template.bind({});
WithRadioGroup.args = {
  fill: 'bg',
  padding: '2x',
  border: '1bw',
  flow: 'column',
  heading: 'Reset Settings',
  children: (
    <Radio.Group
      padding="1x 0"
      border="top bottom"
      onChange={(props) => console.log('selected ', props)}
    >
      <Radio.Field key="one" value="one">
        One
      </Radio.Field>
      <Radio.Field key="two" value="two">
        Two
      </Radio.Field>
      <Radio.Field key="three" value="Three">
        Three
      </Radio.Field>
    </Radio.Group>
  ),
  actions: (
    <Button.Group flow="column">
      <Button key="Cancel" padding="0.5x 1x">
        Cancel
      </Button>
      <Button key="Ok" clear padding="0.5x 1x">
        Ok
      </Button>
    </Button.Group>
  ),
};

export const WithAvatarList = Template.bind({});
WithAvatarList.args = {
  fill: 'bg',
  padding: '2x',
  border: '1bw',
  flow: 'column',
  heading: 'Set Backup Account',
  children: [
    <Avatar.Profile key="1" username="Van Gogh" border="0">
      <Avatar showDefaultAvatar />
    </Avatar.Profile>,
    <Avatar.Profile key="2" username="Van Gogh" border="0">
      <Avatar showDefaultAvatar />
    </Avatar.Profile>,
    <Avatar.Profile key="3" username="Van Gogh" border="0">
      <Avatar showDefaultAvatar />
    </Avatar.Profile>,
  ],
  actions: (
    <Button.Group flow="column">
      <Button key="Ok" clear>
        Ok
      </Button>
    </Button.Group>
  ),
};
