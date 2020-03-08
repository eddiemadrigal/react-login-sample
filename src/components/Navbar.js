import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Logout from './Logout';
import LogStatusLink from './LogStatusLink';
import DashboardDefault from './Dashboard/Default';
import './Navbar.css';

function Navbar(props) {

	console.log("From Navbar isLoggedIn: ", props.isLoggedIn)

	return (
		<Router>
		<div className='App'>
			<nav>
				<h2>Co-Make</h2>
				<div className='nav-links'>
					<Link to='/' className='link'>
						Home
					</Link>
					<Link to='/about' className='link'>
						About
					</Link>
					<Link to='/contact' className='link'>
						Contact
					</Link>
					<LogStatusLink
						isLoggedIn = { props.isLoggedIn }
					/> 
				</div>
			</nav>

		  <Switch>
			<Route path="/about">
			  <About />
			</Route>
			<Route path="/contact">
			  <Contact />
			</Route>
			<Route path="/login">
				<Login

				setLoginBox = {props.setLoginBox} loginBox = {props.loginBox } 
				setRegisterBox = { props.setRegisterBox } registerBox = { props.registerBox }
				setIsLoggedIn = { props.setIsLoggedIn }  isLoggedIn = { props.isLoggedIn }
				loginAttempt = { props.loginAttempt } setLoginAttempt = { props.setLoginAttempt }

				/>
			</Route>
			<Route path="/logout">
				<Logout setIsLoggedIn = { props.setIsLoggedIn }  isLoggedIn = { props.isLoggedIn } />
			</Route>
			<Route path="/dashboard/:id">
				<DashboardDefault />
			</Route>
			<Route path="/">
			  <Home />
			</Route>
		  </Switch>
		</div>
	  </Router>
	);
}

export default Navbar;

