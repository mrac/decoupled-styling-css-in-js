import * as React from 'react';
import { mergeDeep } from 'src/utils/merge-deep';

import { MyButtonClasses, myButtonClasses } from './my-button-style';

interface MyButtonProps {
  classes?: MyButtonClasses;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: any;
  label?: string;
  type?: 'primary' | 'secondary';
}

export function MyButton(props: MyButtonProps) {
  const classes = mergeDeep(myButtonClasses, props.classes);
  const typeClass = props.type && classes.types![props.type];

  return (
    <button
      className={`
        ${classes.root}
        ${classes.rootStyle}
        ${classes.rootFocus}
        ${classes.rootDisabled}
        ${classes.rootPosition}
        ${typeClass}
      `}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <div className={classes.content}>{props.children || 'Click'}</div>
    </button>
  );
}
