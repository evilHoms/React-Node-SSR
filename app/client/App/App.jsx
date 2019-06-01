import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './App.css';
import Header from 'Components/Header';

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
        <Header />
        <button className={ styles.btn } onClick={ this.handleColorChange }>change color</button>
        <div className={ styles.text } style={{ backgroundColor: this.state.color }}>HELLO WORLD</div>
        <img src="images/test-img.png" />
      </div>
    );
  }
}

export default withStyles(styles)(App);
