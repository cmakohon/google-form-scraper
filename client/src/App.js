import React, {Component} from 'react';
import AppRoutes from './routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <AppRoutes/>
        </div>
      </div>
    );
  }
}

export default App;
