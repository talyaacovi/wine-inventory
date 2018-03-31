import React, { Component } from 'react';
import { Inventory } from './Inventory';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
	}

	fetchStuff(evt) {
		evt.preventDefault();
		fetch('http://localhost:3000/test')
		.then((response) => response.json())
        .then((data) => {
        	console.log(data);
        	this.setState({ name: data.user })
        })
	}

	render() {
		return (
			<div>
				<h1>Tal's Wine</h1>
				<Inventory />
				{this.state.name}
				<form onSubmit={this.fetchStuff.bind(this)}>
					<button type='submit'>Test</button>
				</form>
			</div>
			)
	}
}

export default Main;