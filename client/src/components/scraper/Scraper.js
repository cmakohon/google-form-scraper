import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight'

class Scraper extends Component {
  render() {
    return (
      <div className="col scraper-results mt-4">
        <h4 className="mb-3" style={{textAlign: 'center'}}>Scraper Results</h4>
        <Highlight className="html">
          {`<form action="${this.props.formData.formAction}" method="POST" target="_self">\n` +
          this.props.formData.formInputs.map(input => {
            if (input.type === 'input') {
              return `  <input name="${input.name}"/>\n`
            } else if (input.type === 'textarea') {
              return `  <textarea name="${input.name}"/>\n`
            }
          }).join('') + `  <input type="submit" value="Submit"/>\n` +
          `</form>`}
        </Highlight>
      </div>
    )
  }
}

Scraper.propTypes = {
  formData: PropTypes.object.isRequired
};

export default Scraper;