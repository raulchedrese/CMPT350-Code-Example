import { Component } from 'react';

export default class UserListPage extends Component {
  render() {
    return (
      <strong className="title">Users</strong>

      {this.state.users.map((user) => {
          return (
            <ListItem name={user.name} key={user.id} onNavigation={() => {
              this.setState({page: 'user-detail'})
              window.history.pushState({}, "", "/user-detail");
            }} />
          )
      })}
    )
  }
}
