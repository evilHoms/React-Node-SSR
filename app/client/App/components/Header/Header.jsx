import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './Header.css';

class Header extends PureComponent {
  render() {

    return (
      <div className={ styles['header-component'] }>
        Header
      </div>
    );
  }
}

export default withStyles(styles)(Header);
