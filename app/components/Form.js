import React, { Component } from 'react';

export class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { input: '' };
	}

	handleSubmit(evt) {
		evt.preventDefault();
		let item = this.state.input;
		this.props.onChange(item);
		this.setState({ input: '' });
	}

	handleChange(evt) {
		let newItem = evt.target.value;
		this.setState({ input: newItem });
	}

	render() {
		return (
				<div>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<input required onChange={this.handleChange.bind(this)} value={this.state.input}></input>
						<input type='submit' value={this.props.btn}></input>
					</form>
				</div>
			)
	}
}