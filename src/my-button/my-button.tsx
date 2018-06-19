import * as React from 'react';
import { MyButtonClasses, myButtonClasses } from './my-button-style';

interface MyButtonProps {
  classes?: MyButtonClasses;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: any;
  label?: string;
}

export function MyButton(props: MyButtonProps) {
  const classes = { ...myButtonClasses, ...props.classes };

  return (
    <button
      className={`
        ${classes.root}
        ${classes.rootStyle}
        ${classes.rootFocus}
        ${classes.rootDisabled}
        ${classes.rootPosition}
      `}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <div className={classes.content}>{props.children || 'Click'}</div>
    </button>
  );
}
