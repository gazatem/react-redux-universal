import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    Genres Menu
                </div>
                <div className="col-md-9">
                    Latest Movies
                </div>
            </div>
        </div>
      </div>
    );
  }
}
