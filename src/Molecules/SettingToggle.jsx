import React, { useCallback } from 'react';
import T from 'prop-types';

import Button from '../Atoms/Button';

export default function SettingToggle(allProps) {
  const {
    text,
    activeText,
    inactiveText,
    isActive,
    onAction,
    ...otherProps
  } = allProps;

  const handleStatusChange = useCallback(() => {
    onAction({ status: !isActive });
  }, [isActive]);

  return (
    <nu-pane {...otherProps}>
      <nu-block>
        <nu-el>{text}</nu-el>{' '}
        <nu-el text="sb">{isActive ? activeText : inactiveText}</nu-el>
      </nu-block>
      <Button special={isActive ? true : undefined} onTap={handleStatusChange}>
        {isActive ? activeText : inactiveText}
      </Button>
    </nu-pane>
  );
}

SettingToggle.propTypes = {
  text: T.string,
  activeText: T.string,
  inactiveText: T.string,
  isActive: T.bool,
  onAction: T.func,
};
