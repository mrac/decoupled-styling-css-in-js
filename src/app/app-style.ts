import { css, keyframes } from 'emotion';
import { MyButtonClasses } from 'src/my-button/my-button-style';

export interface AppClasses {
  root?: string;
  logo?: (animation?: string) => string;
  header?: string;
  title?: string;
  intro?: string;
  button?: MyButtonClasses;
  animation?: string;
  links?: string;
}

export const defaultClasses: AppClasses = {};

defaultClasses.root = css`
  text-align: center;
`;

defaultClasses.logo = (animation?: string) => css`
  animation: ${animation} infinite 20s linear;
  height: 80px;
`;

defaultClasses.header = css`
  background-color: #222;
  padding: 20px;
  color: white;
`;

defaultClasses.title = css`
  font-size: 1.5em;
`;

defaultClasses.intro = css`
  font-size: large;
`;

defaultClasses.links = css`
  a {
    color: white;

    &:visited {
      color: white;
    }

    &:hover {
      color: cyan;
    }
  }
`;

defaultClasses.button = {
  rootStyle: css`
    background-color: #d0d0ff;
  `,
  rootPosition: css`
    margin-left: -50%;
  `
};

defaultClasses.animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
