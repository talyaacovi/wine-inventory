import React, { Component } from 'react';
import { Form } from './Form';


export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
	}

	handleChange(evt) {
		console.log(evt);
	}

	render() {
		return (
				<div>
					<h1>Login</h1>
					<form>
						<label>Email: 
							<input type='email' onChange={this.handleChange.bind(this)} value={this.state.username}/>
						</label>
						<label>Password: 
							<input type='password' onChange={this.handleChange.bind(this)} value={this.state.password}/>
						</label>
						<input type='submit' value='Submit'/>
					</form>
				</div>
			)
	}
}