import { css } from 'emotion';
import { AppClasses } from 'src/app/app-style';

const themeB: AppClasses = {
  okButton: null!,
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
  `
};

export default themeB;
