import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { connect } from 'react-redux';

import styles from './Footer.css';

const mapStateToProps = state => ({
  isSubheaderShown: state.isSubheaderShown
});

class Footer extends PureComponent {
  render() {
    const { isSubheaderShown } = this.props;

    return (
      <div
        className={ styles["footer-component"] }
        style={{
          backgroundColor: isSubheaderShown ? 'green' : '#f0f0f0',
          color: isSubheaderShown ? 'white' : 'black'
        }}>
        Some important information
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Footer));
