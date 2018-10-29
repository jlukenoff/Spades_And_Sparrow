import React, { Component } from 'react';
import Nav from '../Nav/Nav';

// import PropTypes from 'prop-types';

import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    return (
      <div className={styles.rootContainer}>
        <Nav />
      </div>
    );
  }
}

// App.propTypes = {
// };

export default App;
