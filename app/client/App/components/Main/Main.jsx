import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './Main.css';

class Main extends PureComponent {
  render() {

    return (
      <div className={ styles["main-component"] }>
        <h1 className={ styles["title"] }>
          SSR React Redux  boilerplate
        </h1>
        <h2>
          Core:
        </h2>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>PostCSS/Sass</li>
          <li>NodeJs/Express.js</li>
        </ul>
        <h2>
          Instructions:
        </h2>
        <h3>
          To start in Development mode:
        </h3>
        <p>
          yarn start / npm run start
        </p>
        <h3>
          To start in Production mode:
        </h3>
        <p>
          yarn build / npm run build
        </p>
        <p>
          node production/server
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
