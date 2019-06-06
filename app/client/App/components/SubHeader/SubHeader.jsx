import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { connect } from 'react-redux';

import styles from './SubHeader.css';
import { toggleSubheader } from 'Actions';

const mapStateToProps = state => ({
  isSubheaderShown: state.isSubheaderShown
});

const mapDispatchToProps = dispatch => ({
  toggleSubheader: () => dispatch(toggleSubheader()),
})

class SubHeader extends PureComponent {
  render() {
    const { isSubheaderShown, toggleSubheader } = this.props;

    return (
      <div
        className={ styles["sub-header-component"] }
        style={{ top: isSubheaderShown ? '100%' : 0 }}
        onClick={ toggleSubheader }>
        <div className={ styles["sub-header-content"] }>
          You are awesome :)
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SubHeader));
