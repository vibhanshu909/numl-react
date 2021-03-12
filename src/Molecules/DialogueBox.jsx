import React from 'react';
import T from 'prop-types';

export default function DialogueBox(allProps) {
  const { heading, actions, children, ...otherProps } = allProps;
  return (
    <nu-flex
      nu-overlay
      place="inside"
      fill="#dark.50"
      box="y"
      gap="1x"
      radius="1x"
      {...otherProps}
    >
      {heading ? <nu-block text="sb">{heading}</nu-block> : null}
      {children ? <nu-block size="sm">{children}</nu-block> : null}
      <nu-pane content="flex-end">{actions}</nu-pane>
    </nu-flex>
  );
}

DialogueBox.propTypes = {
  heading: T.string,
};
