import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = { email: '', password: '' };
	}

	handleChange(evt) {
		this.setState({ email: this.email.value, password: this.password.value });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		
		var headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');

		fetch('http://localhost:3000/add-user', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			}),
			credentials: 'same-origin'
		})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		});
	}

	render() {
		return (
				<div>
					<h1>Signup</h1>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<label>Email: 
							<input type='email' ref={input => this.email = input} onChange={this.handleChange.bind(this)} value={this.state.email}/>
						</label>
						<label>Password: 
							<input type='password' ref={input => this.password = input} onChange={this.handleChange.bind(this)} value={this.state.password}/>
						</label>
						<input type='submit' value='Submit'/>
					</form>
					<p>Already have an account? Log in <Link to='/'>here</Link></p>
				</div>
			)
	}
}