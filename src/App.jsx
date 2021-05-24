import React from 'react';
import './style/style.css';
import Mynav from './components/header';
import Login from './components/Login';
import Book from './components/Book';
import Tickets from './components/Tickets';
import Ticket from './components/Ticket';
import {
	HashRouter,
	Switch,
	Route,
} from 'react-router-dom';


const App=()=> {
	return (
		<HashRouter basename="/">
			<div className="big__container">
				<Mynav />
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/book" component={Book} />
					<Route path="/tickets" component={Tickets} />
					<Route path="/ticket" component={Ticket} />
				</Switch>
			</div>
		</HashRouter>
	);
}

export default App;
