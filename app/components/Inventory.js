import React, { Component } from 'react';
import { Form } from './Form';

export class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = { wine: [], btn: 'Add To List' };
		this.fetchInventory = this.fetchInventory.bind(this);
		this.updateInventory = this.updateInventory.bind(this);
	}

	componentWillMount() {
		this.fetchInventory();
	}

	fetchInventory() {
		fetch('http://localhost:3000/get-inventory')
		.then((response) => response.json())
        .then((data) => {
        	let wines = data.data.map(item => item.name);
        	this.setState({ wine: wines })
        })
	}

	updateInventory(item) {
		var headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');

		fetch('http://localhost:3000/add-wine', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify({
				name: item
			}),
			credentials: 'same-origin'
		})
		.then((response) => response.json())
		.then((data) => {
			console.log('success!');
		});
	}

	updateList(item) {
		let currItems = this.state.wine;
		currItems.push(item);
		this.setState({ wine: currItems });
		this.updateInventory(item);
	}

	render() {
		let wine = this.state.wine.map((item,i) => <li key={i}>{item}</li>)
		return (
				<div>
					<h1>Tal's Wine</h1>
					<h2>This will be a list of wine</h2>
					{wine}
					<div>
						<p>Add New Wine To List:</p>
						<Form onChange={this.updateList.bind(this)} btn={this.state.btn}/>
					</div>
				</div>
			)
	}
}