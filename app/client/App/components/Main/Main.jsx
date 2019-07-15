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
        <section className={ styles["section"] }>
          <h2 className={ styles["sub-title"] }>
            Core:
          </h2>
          <div>_______________________</div>
          <div>/-----------------------------------\</div>
          <div>|-----------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;----------|</div>
          <div>|-------------------------------------|</div>
          <div>|-----------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Redux&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;----------|</div>
          <div>|-------------------------------------|</div>
          <div>|------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PostCSS/Sass&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-----|</div>
          <div>|-------------------------------------|</div>
          <div>|-----&nbsp;&nbsp;&nbsp;NodeJs/Express.js&nbsp;&nbsp;&nbsp;-----|</div>
          <div>|------------------------------------|</div>
          <div>\_______________________/</div>
        </section>
        <h2 className={ styles["sub-title"] }>
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
