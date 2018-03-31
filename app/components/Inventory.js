import React, { Component } from 'react';
import { Form } from './Form';

let listitems = ['Grenache', 'Trousseau', 'Carignane'];

export class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = { wine: listitems };
	}

	updateList(item) {
		let currItems = this.state.wine;
		currItems.push(item);
		this.setState({ wine: currItems });
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