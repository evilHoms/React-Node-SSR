import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { connect } from 'react-redux';

import styles from './Header.css';
import SubHeader from 'Components/SubHeader';

const mapStateToProps = state => ({
  isSubheaderShown: state.isSubheaderShown
});

class Header extends PureComponent {
  render() {
    const { isSubheaderShown } = this.props;

    return (
      <div className={ styles["header-component"] }>
        <div
          className={ styles["header-content"] }
          style={{
            backgroundColor: isSubheaderShown ? 'green' : '#f0f0f0',
            color: isSubheaderShown ? 'white' : 'black'
          }}>
          <div>
            Powered by:
          </div>
          <div>
            <img src="images/react.png" alt="react"/>
            <img src="images/redux.png" alt="redux"/>
            <img src="images/nodejs.png" alt="nodejs"/>
            <img src="images/postcss.svg" alt="postcss"/>
            <img src="images/webpack.png" alt="webpack"/>
          </div>
        </div>
        <SubHeader />
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
