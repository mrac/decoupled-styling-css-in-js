import * as React from 'react';
import { mergeDeep } from 'src/utils/merge-deep';

import logo from './logo.svg';
import { AppClasses, appClasses } from './app-style';
import { MyButton } from '../my-button/my-button';

export interface AppProps {
  classes?: AppClasses;
}

export class App extends React.Component<AppProps> {
  public render() {
    const classes = mergeDeep(appClasses, this.props.classes);

    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <img className={classes.logo} src={logo} alt="logo" />
          <h1 className={classes.title}>Welcome to React</h1>
          <div className={classes.links}>
            <a href="/?theme=a">theme A</a> | <a href="/?theme=b">theme B</a>
          </div>
        </header>
        <p className={classes.intro}>
          <MyButton type="primary" classes={classes.okButton}>
            OK
          </MyButton>
        </p>
      </div>
    );
  }
}
