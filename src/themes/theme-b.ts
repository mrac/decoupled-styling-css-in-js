import { css } from 'emotion';
import { AppClasses } from 'src/app/app-style';

const themeA: AppClasses = {
  links: css`
    a {
      color: white;

      &:visited {
        color: white;
      }

      &:hover {
        color: cyan;
      }
    }
    a:first-child {
      color: red;
    }
    a:last-child {
      color: green;
    }
  `,
  button: {}
};

export default themeA;
