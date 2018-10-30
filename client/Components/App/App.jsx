import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Router>
          <Switch>
            <Route path='/' component={Nav} />
            <Route component={Nav} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// App.propTypes = {
// };

export default App;
