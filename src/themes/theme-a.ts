import { css, keyframes } from 'emotion';
import { AppClasses, appClasses } from 'src/app/app-style';

const animation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.7)
  }
  100% {
    transform: scale(1)
  }
`;

const themeA: AppClasses = {
  logo: css`
    animation: ${animation} infinite 0.7s linear;
    height: 80px;
  `,
  title: css`
    ${appClasses.title};
    color: #5050ff;
  `
};

export default themeA;
