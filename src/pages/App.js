import React, { Component } from 'react';
import { Link } from 'react-router';

/*import './app.css';*/

class App extends Component {
    render() {
      return (
        <div className="container">

          <div className="appContent">

          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
        </ul>

            {this.props.children}
          </div>

        </div>
      );
    }
}

export default App;
