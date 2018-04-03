import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
	}

	handleChange(evt) {
		console.log(evt.target.value);
	}

	handleSubmit(evt) {
		console.log(evt);
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
							<input type='password' onChange={this.handleChange.bind(this)} value={this.state.password}/>
						</label>
						<input type='submit' value='Submit'/>
					</form>
					<p>Already have an account? Log in <Link to='/'>here</Link></p>
				</div>
			)
	}
}