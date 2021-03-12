import React, { useEffect, useRef } from 'react';

export default function Form({ children, ...otherProps }) {
  return <nu-form {...otherProps}>{children}</nu-form>;
}

Form.Field = ({ children, ...otherProps }) => {
  return <nu-field {...otherProps}>{children}</nu-field>;
};

Form.Check = ({ children, assert, ...otherProps }) => {
  const ref = useRef();
  useEffect(() => {
    if (ref?.current && typeof assert === 'function') {
      const node = ref.current;
      node.assert = assert;
    }
  }, [ref.current]);
  return (
    <nu-check
      {...otherProps}
      ref={ref}
      assert={typeof assert !== 'function' ? assert : undefined}
    >
      {children}
    </nu-check>
  );
};
