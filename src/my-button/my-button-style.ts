import { css } from 'emotion';

export interface MyButtonClasses {
  root?: string;
  rootPosition?: string;
  rootStyle?: string;
  rootDisabled?: string;
  rootFocus?: string;
  content?: string;
}

export const defaultClasses: MyButtonClasses = {};

const borderRadius = 4;

defaultClasses.root = css`
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
`;

defaultClasses.rootStyle = css`
  align-items: center;
  border-radius: ${borderRadius}px;
  font-family: sans-serif;
  font-size: 14px;
  text-decoration: none;
  min-height: 50px;
  min-width: 150px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

defaultClasses.rootPosition = css``;

defaultClasses.rootDisabled = css`
  &:disabled {
    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000000;
      border-radius: ${borderRadius}px;
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
`;

defaultClasses.rootFocus = css`
  &:focus {
    outline: none;
  }
`;

defaultClasses.content = css`
  flex: 1 0 auto;
  padding: 8px 15px;
`;
