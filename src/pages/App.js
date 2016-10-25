import React, { Component } from 'react';

/*import './app.css';*/

class App extends Component {
    render() {
      return (
        <div className="container">

          <div className="appContent">
            {this.props.children}
          </div>

        </div>
      );
    }
}

export default App;
