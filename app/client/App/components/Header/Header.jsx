import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './Header.css';
import SubHeader from 'Components/SubHeader';

class Header extends PureComponent {
  render() {

    return (
      <div className={ styles["header-component"] }>
        <div className={ styles["header-content"] }>
          header
        </div>
        <SubHeader />
      </div>
    );
  }
}

export default withStyles(styles)(Header);
