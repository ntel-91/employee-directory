import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Components/Home'
import EmployeeContainer from './Containers/EmployeeContainer';
import employeesList from './employees';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
  	useParams
} from "react-router-dom";
import { Menu, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const departments = [{id: 1, department_name: "Engineering"}, {id: 2, department_name: "Product"}];
const jobTitles = [{id: 1, job_title: "Software Engineer"}, {id: 2, job_title: "Financial Analyst"}];

const App = () => {
	
	const [employees, setEmployees] = useState([]);
	const [departmentList, setDepartments] = useState([]);
	const [jobTitleList, setJobTitleList] = useState([]);


	useEffect(() => {
		const employeeURL = "http://localhost:3000/api/v1/employees";
		const departmentURL = "http://localhost:3000/api/v1/departments";

		Promise.all([
            fetch("http://localhost:3000/api/v1/employees").then(res => res.json()),
            fetch("http://localhost:3000/api/v1/departments").then(res => res.json()),
			fetch("http://localhost:3000/api/v1/job_titles").then(res => res.json())
        ]).then(([employeeData, departmentData, jobTitleData]) => {
			setEmployees(employeeData);
			console.log("EMPLOYEE: ", employeeData)
			setDepartments(departmentData);
			console.log("department: ", departmentData)
			setJobTitleList(jobTitleData);
			console.log("JOB TITLES: ", jobTitleData)
		})
		
		// fetch("http://localhost:3000/api/v1/employees")
		// .then(res => res.json())
		// .then(function(data){
		// 	console.log(data)
		// 	setEmployees(data);
		// })

		// setDepartments(departments);
		// setJobTitleList(jobTitles);
	}, [])

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
				<Route path="/employees" render={(routerProps) => {
					return (
						<EmployeeContainer 
							employees={employees} 
							departmentList={departmentList} 
							jobTitleList={jobTitleList}
						/>
					)
				}} />
				<Route path="/" component={Home}/>
			</Switch>
		</Router>
  );
}

export default App;