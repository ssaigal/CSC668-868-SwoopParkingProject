'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
// end::vars[]

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {users: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/users'}).done(response => {
			this.setState({users: response.entity._embedded.users});
		});
	}

	render() {
		return (
			<UserList users={this.state.users}/>
		)
	}
}
// end::app[]

// tag::employee-list[]
class UserList extends React.Component{
	render() {
		var users = this.props.users.map(users =>
			<User key={user._links.self.href} user={user}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>UserName</th>
						<th>Password</th>
					</tr>
					{users}
				</tbody>
			</table>
		)
	}
}
// end::employee-list[]

// tag::employee[]
class User extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.user.userName}</td>
				<td>{this.props.user.password}</td>
			</tr>
		)
	}
}
// end::employee[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]

