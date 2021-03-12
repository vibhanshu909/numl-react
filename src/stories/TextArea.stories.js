import React from 'react';

import Root from '../components/Root';
import TextArea from '../Molecules/TextArea';
import Radio from '../Atoms/Radio';

export default {
  title: 'Example/Molecules/TextArea',
  component: TextArea,
  argTypes: {
    placeholder: {
      defaultValue: 'Text Field',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ children, fieldProps, ...args }) => (
  <Root>
    {children || fieldProps ? (
      <TextArea.Field {...args} children={children} fieldProps={fieldProps} />
    ) : (
      <TextArea {...args} />
    )}
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Text Input Field',
};

export const WithField = Template.bind({});
WithField.args = {
  placeholder: 'Here is a simple placeholder',
  children: 'Value',
  fieldProps: {
    padding: '2x',
    radius: '1x',
    border: '1bw',
    fill: 'bg',
  },
};

export const WithRadio = Template.bind({});
WithRadio.args = {
  placeholder: 'Here is a simple placeholder',
  children: (
    <Radio.Group inline size="sm" onChange={(props) => console.log('selected ', props)}>
      <Radio.Field key="label_1" value="label_1">
        Label 1
      </Radio.Field>
      <Radio.Field key="label_2" value="label_2">
        Label 2
      </Radio.Field>
      <Radio.Field key="label_3" value="label_3">
        Label 3
      </Radio.Field>
    </Radio.Group>
  ),
  fieldProps: {
    padding: '2x',
    radius: '1x',
    border: '1bw',
    fill: 'bg',
  },
};
