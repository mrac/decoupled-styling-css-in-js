import * as React from 'react';
import { MyButtonClasses, defaultClasses } from './my-button-style';

interface MyButtonProps {
  classes?: MyButtonClasses;
  positionClass?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: any;
  label?: string;
}

export function MyButton(props: MyButtonProps) {
  const classes = props.classes || {};

  return (
    <button
      className={`
        ${classes.root || defaultClasses.root}
        ${classes.rootStyle || defaultClasses.rootStyle}
        ${classes.rootFocus || defaultClasses.rootFocus}
        ${classes.rootDisabled || defaultClasses.rootDisabled}
        ${classes.rootPosition || defaultClasses.rootPosition}
      `}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <div className={classes.content || defaultClasses.content}>{props.children || 'Click'}</div>
    </button>
  );
}
