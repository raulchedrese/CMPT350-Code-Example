import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      page: 'user-list'
    };

    fetch('/users.json')
    .then(response => response.json())
    .then((response) => {
      this.setState({ users: response })
    });
  }

  render() {
    if (this.state.page === 'user-list') {
      return (
        <div className="App">
          <strong className="title">Users</strong>

          {this.state.users.map((user) => {
            return (
              <ListItem name={user.name} key={user.id} onNavigation={() => {
                this.setState({page: 'user-detail'})
                window.history.pushState({}, "", "/user-detail");
              }} />
            )
          })}
        </div>
      )
    }

    if (this.state.page == 'user-detail') {
      return (
        <div className="App">
          <a href="/">Back</a>
          <strong className="title">Users</strong>
          <div>Details</div>
        </div>
      )
    }

  }
}

export default App;
