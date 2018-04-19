import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="col d-flex justify-content-center">
        <h2>Google Form Scraper</h2>
      </div>
    )
  }
}

Header.propTypes = {};

export default Header;