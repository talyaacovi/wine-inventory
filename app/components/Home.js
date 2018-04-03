import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { email: '', password: '' };
	}

	handleChange(evt) {
		console.log(evt);
	}

	handleSubmit(evt) {
		console.log(evt);
	}

	render() {
		return (
				<div>
					<h1>Login</h1>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<label>Email: 
							<input type='email' onChange={this.handleChange.bind(this)} value={this.state.email}/>
						</label>
						<label>Password: 
							<input type='password' onChange={this.handleChange.bind(this)} value={this.state.password}/>
						</label>
						<input type='submit' value='Submit'/>
					</form>
					<p>Don't have an account? Create one <Link to='/signup'>here</Link></p>
				</div>
			)
	}
}