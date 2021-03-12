import React from 'react';
import Root from '../components/Root';
import Form from '../Molecules/Form';

export default {
  title: 'Example/Molecules/Form',
  component: Form,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
      },
    },
    label: {
      defaultValue: 'Form',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => (
  <Root>
    <nu-card>
      <nu-props radius=".5x"></nu-props>
      <nu-theme hue="250" mod="tone"></nu-theme>
      <nu-theme name="error" hue="1" mod="tint"></nu-theme>
      <nu-attrs for="field" theme=":invalid[error]"></nu-attrs>
      <nu-attrs
        for="label"
        place="top left 1x 2x"
        z="above"
        text="w5"
        origin="top left"
        scale="^:focus[.75] :placeholder[1] .75"
        move="^:focus[0] :placeholder[0 1.25x] 0"
        color="^:focus[text-soft] :placeholder[text 50%] text-soft"
        interactive="n"
        transition="theme, transform"
      ></nu-attrs>
      <Form control="output[.value]" gap="1x">
        <Form.Field>
          <nu-inputgroup height="8x" padding="2.5x 1x 1x 1x">
            <nu-label>Username</nu-label>
            <nu-input id="username" placeholder="" grow="1"></nu-input>
          </nu-inputgroup>
          <Form.Check
            for="username"
            assert={(val) => val && typeof val === 'string' && val.match(/^[a-z]{6}$/i)}
          >
            Username is required
          </Form.Check>
        </Form.Field>
        <Form.Field>
          <nu-inputgroup height="8x" padding="2.5x 1x 1x 1x">
            <nu-label>Password</nu-label>
            <nu-password id="password" placeholder="" grow="1"></nu-password>
          </nu-inputgroup>
          <Form.Check for="password" assert="required">
            Password is required
          </Form.Check>
        </Form.Field>
        <nu-btn special action="submit">
          Submit
        </nu-btn>
      </Form>
      <nu-block overflow="auto" scrollbar width="max">
        <nu-value id="output"></nu-value>
      </nu-block>
    </nu-card>
  </Root>
);

export const Basic = Template.bind({});
