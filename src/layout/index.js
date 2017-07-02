import './layout.css';

import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pick of the Week</h2>
        </div>
        <p className="App-intro">
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default Layout;
