import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Contact from '../Contact/Contact';

// import PropTypes from 'prop-types';

import styles from './Nav.css';

const FourOhFour = () => <h1>404</h1>

const Nav = () => (
  <Router>
    <div>

      <Link to="/" className={`${styles.title} ${styles.link}`}>Spades And Sparrow</Link>

      <span className={styles.subTitle}>Hannah Schneider Photography</span>
      <nav>
        <ul className={styles.navContainer}>
          <li>
            <Link to="/" className={styles.link}>Home</Link>
          </li>
          <li>
            <Link to="/portfolio/" className={styles.link}>Portfolio</Link>
          </li>
          <li>
            <Link to="/about/" className={styles.link}>About</Link>
          </li>
          <li>
            <Link to="/contact/" className={styles.link}>Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
);

// Nav.propTypes = {
// };

export default Nav;
