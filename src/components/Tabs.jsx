import React, { Component } from 'react';

import { Link } from  'react-router';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  render() {
    return (<div>
      <nav className="tabs">
        <Link to="/actors" activeClassName="is-active">actors</Link>
        <Link to="/places" activeClassName="is-active">places</Link>
        <Link to="/records" activeClassName="is-active">records</Link>
      </nav>

      {this.props.children}
    </div>);
  }
};

export default App;
