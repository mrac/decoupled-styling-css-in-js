import * as React from 'react';

import logo from './logo.svg';
import { AppClasses, defaultClasses } from './app-style';
import { MyButton } from '../my-button/my-button';

export interface AppProps {
  classes?: AppClasses;
}

export class App extends React.Component<AppProps> {
  public render() {
    const classes = this.props.classes || {};

    return (
      <div className={`${classes.root || defaultClasses.root}`}>
        <header className={classes.header || defaultClasses.header}>
          <img
            className={
              (classes.logo && classes.logo(classes.animation || defaultClasses.animation)) ||
              (defaultClasses.logo && defaultClasses.logo(classes.animation || defaultClasses.animation))
            }
            src={logo}
            alt="logo"
          />
          <h1 className={classes.title || defaultClasses.title}>Welcome to React</h1>
          <div className={classes.links || defaultClasses.links}>
            <a href="/?theme=a">theme A</a> | <a href="/?theme=b">theme B</a>
          </div>
        </header>
        <p className={classes.intro || defaultClasses.intro}>
          <MyButton classes={classes.okButton || defaultClasses.okButton}>OK</MyButton>
        </p>
      </div>
    );
  }
}
