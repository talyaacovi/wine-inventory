import React, { Component } from 'react';

class Main extends Component {
	render() {
		return (
			<div>
				<div>
					<h1>Tal's Wine</h1>
					<ul id='wine'>
					</ul>
				</div>
				<div>
					<p>Add New Wine To List:</p>
					<form id='add'>
						<input type='text'></input>
						<input type='submit' value='Add To List'></input>
					</form>
				</div>
			</div>
			)
	}
}

export default Main;