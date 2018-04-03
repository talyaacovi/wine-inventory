import React, { Component } from 'react';
import { Inventory } from './Inventory';
import { Home } from './Home';
import { Signup } from './Signup';
import { Test } from './Test';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/wine' component={Inventory}/>
				<Route path='/signup' component={Signup}/>
			</Switch>
			)
	}
}

export default Main;