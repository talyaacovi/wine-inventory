import React, { Component } from 'react';
import { Inventory } from './Inventory';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Tal's Wine</h1>
				<Inventory />
			</div>
			)
	}
}

export default Main;