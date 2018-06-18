import { css, keyframes } from 'emotion';
import { AppClasses, defaultClasses } from 'src/app/app-style';

const themeA: AppClasses = {
  logo: (animation?: string) => css`
    animation: ${animation} infinite 0.7s linear;
    height: 80px;
  `,
  title: css`
    ${defaultClasses.title};
    color: #5050ff;
  `,
  animation: keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.7)
    }
    100% {
      transform: scale(1)
    }
  `
};

export default themeA;
