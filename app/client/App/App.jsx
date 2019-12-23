import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './App.css';
import Main from 'Components/Main';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

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
        <Main />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
