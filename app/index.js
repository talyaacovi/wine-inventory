import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
// import Test from './components/Test';
import css from './static/style.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
	<BrowserRouter>
    	<Main />
    </BrowserRouter>
    ), document.getElementById('app')
);