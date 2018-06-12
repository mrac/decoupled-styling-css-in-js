import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/app';
import registerServiceWorker from './registerServiceWorker';
import theme from './themes/theme-b';

ReactDOM.render(<App classes={theme} />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
