import { css, keyframes } from 'emotion';
import { AppClasses } from 'src/app/app-style';

const themeA: AppClasses = {
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
  `,
  logo: (animation?: string) => css`
    animation: ${animation} infinite 0.7s linear;
    height: 80px;
  `
};

export default themeA;
