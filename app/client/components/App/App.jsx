import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './App.css';

class App extends Component {
  state = {
    color: 'red',
  }

  handleColorChange = () => {
    this.setState((prevState) => ({ color: prevState.color === 'red' ? 'blue' : 'red' }));
  }

  render() {
    return (
      <div className={ styles.app }>
        <button className={ styles.btn } onClick={ this.handleColorChange.bind(this) }>change color</button>
        <div className={ styles.text } style={{ backgroundColor: this.state.color }}>HELLO WORLD</div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
