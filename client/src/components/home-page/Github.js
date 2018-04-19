import React from 'react';

const Github = () => {
  return (
    <div className="d-flex flex-column align-items-center mb-5">
      <div className="mt-2 d-flex align-items-center" >
        <i className="fa fa-github" style={{fontSize: '18pt'}}/>
        &nbsp;
        <a href="https://github.com/cmakohon/google-form-scraper">github.com/cmakohon</a>
      </div>
      <div className="d-flex align-items-center" style={{fontSize: '8pt'}}>
        <span>Contributions from</span>
        &nbsp;
        <a href="https://github.com/peduarte/google-form-scraper/">peduarte</a>
      </div>
    </div>
  )
};

export default Github;