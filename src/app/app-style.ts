import { css, keyframes } from 'emotion';
import { MyButtonClasses } from 'src/my-button/my-button-style';

export interface AppClasses {
  root?: string;
  logo?: string;
  header?: string;
  title?: string;
  intro?: string;
  okButton?: MyButtonClasses;
  links?: string;
}

export const appClasses: AppClasses = {};

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

appClasses.root = css`
  text-align: center;
`;

appClasses.logo = css`
  animation: ${animation} infinite 20s linear;
  height: 80px;
`;

appClasses.header = css`
  background-color: #222;
  padding: 20px;
  color: white;
`;

appClasses.title = css`
  font-size: 1.5em;
`;

appClasses.intro = css`
  font-size: large;
`;

appClasses.okButton = {
  rootStyle: css`
    background-color: #a0a0ff;
  `,
  types: {
    primary: css`
      background-color: #a0a0d0;
    `
  },
  rootPosition: css`
    margin-left: -50%;
  `
};

appClasses.links = css`
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
