import './App.css';
import React from 'react';
import Home from './Components/Home'
import EmployeeContainer from './Containers/EmployeeContainer';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { Menu, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const App = () => {

	return (
		<Router>
			<Menu fixed='top' inverted>
				<Container>
					<Menu.Item as='a'>
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item as='a'>
						<Link to="/employees">Employees</Link>
					</Menu.Item>
				</Container>
			</Menu>
			<Switch>
				<Route path="/employees" component={EmployeeContainer}/>
				<Route path="/" component={Home}/>
			</Switch>
		</Router>
  );
}

export default App;