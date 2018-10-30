import React, { Component } from 'react';

// import PropTypes from 'prop-types';

// import styles from './App';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['Home', 'Earth', 'Wind', 'Fire', 'Water'],
      dataIndex: 0,
      showNav: true,
      ...props,
    };
  }

  handleNav(e, dataIndex) {
    e.preventDefault();
    this.setState({ dataIndex, showNav: false });
  }

  render() {
    const { data, dataIndex, showNav } = this.state;
    return (
      <div>
        {showNav && (
          <div>
            <nav>
              <ul>
                <li><a href="#" onClick={e => this.handleNav(e, 1)}>Earth</a></li>
                <li><a href="#" onClick={e => this.handleNav(e, 2)}>Wind</a></li>
                <li><a href="#" onClick={e => this.handleNav(e, 3)}>Fire</a></li>
                <li><a href="#" onClick={e => this.handleNav(e, 4)}>Water</a></li>
              </ul>
            </nav>
          </div>
        )}
        {data[dataIndex]}
      </div>
    );
  }
}

// App.propTypes = {
// };

export default App;
