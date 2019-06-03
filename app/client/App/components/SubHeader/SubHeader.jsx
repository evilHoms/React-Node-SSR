import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './SubHeader.css';

class SubHeader extends PureComponent {

  state = {
    isShown: false
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown
    }));
  }

  render() {
    const { isShown } = this.state;

    return (
      <div
        className={ styles["sub-header-component"] }
        style={{ top: isShown ? '100%' : 0 }}
        onClick={ this.handleToggle }>
        <div className={ styles["sub-header-content"] }>
          You are awesome :)
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SubHeader);
