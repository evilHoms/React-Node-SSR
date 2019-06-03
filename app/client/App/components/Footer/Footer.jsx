import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './Footer.css';

class Footer extends PureComponent {
  render() {

    return (
      <div className={ styles["footer-component"] }>
        Footer
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
