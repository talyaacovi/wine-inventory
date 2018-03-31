import React, { Component } from 'react';
import { Form } from './Form';

export class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = { wine: [] };
		this.fetchInventory = this.fetchInventory.bind(this);
		this.updateInventory = this.updateInventory.bind(this);
	}

	componentWillMount() {
		this.fetchInventory();
	}

	fetchInventory() {
		fetch('http://localhost:3000/test')
		.then((response) => response.json())
        .then((data) => {
        	this.setState({ wine: data.data })
        })
	}

	updateInventory(item) {
		// let payload = new FormData();
		// payload.append('item', item);

		var headers = new Headers();
		headers.append('Accept', 'application/json'); // This one is enough for GET requests
		headers.append('Content-Type', 'application/json');

		fetch('http://localhost:3000/update', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify({
				item: item
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
					<h2>This will be a list of wine</h2>
					{wine}
					<div>
						<p>Add New Wine To List:</p>
						<Form onChange={this.updateList.bind(this)}/>
					</div>
				</div>
			)
	}
}