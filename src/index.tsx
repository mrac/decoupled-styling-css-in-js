import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/app';
import themeA from './themes/theme-a';
import themeB from './themes/theme-b';
import { AppClasses } from 'src/app/app-style';

const search = location.search.replace('?theme=', '');
let theme: AppClasses;

switch (search) {
  case 'a':
    theme = themeA;
    break;
  case 'b':
    theme = themeB;
    break;
  default:
    theme = themeB;
}

ReactDOM.render(<App classes={theme} />, document.getElementById('root') as HTMLElement);
