import React, { useState, useEffect } from 'react';
import {
	Switch,
	Route,
	Link,
	useRouteMatch,
} from "react-router-dom";
import Employee from '../Components/Employee';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Image, Container, Dropdown, Button, Grid, Header } from 'semantic-ui-react';

const EmployeeContainer = () => {
    let routeMatch = useRouteMatch();

    const [employees, setEmployees] = useState([]); // store employees
    const [filters, setFilters] = useState({'jobTitle': null, 'department': null}) // store filters
	const [departmentList, setDepartments] = useState([]); // store department list
	const [jobTitleList, setJobTitleList] = useState([]); // store job title list


	useEffect(() => {
		Promise.all([
            fetch("http://localhost:3000/api/v1/employees").then(res => res.json()),
            fetch("http://localhost:3000/api/v1/departments").then(res => res.json()),
			fetch("http://localhost:3000/api/v1/job_titles").then(res => res.json())
        ]).then(([employeeData, departmentData, jobTitleData]) => {
            const transformedDepartmentList = transformDepartmentData(departmentData);
            const transformedJobTitleList = transformJobTitleData(jobTitleData);
            
            setEmployees(employeeData);
            setDepartments(transformedDepartmentList);
			setJobTitleList(transformedJobTitleList);
			console.log(employeeData.length, departmentData.length, jobTitleData.length)
		})
	}, [])

    const transformDepartmentData = (departmentList) => {
        let dropdownList = [];
        departmentList.forEach(d => {
            const departmentItem = {
                key: d.id, 
                text: d.department_name,
                value: d.id    
            }
            dropdownList.push(departmentItem);
        })
        return dropdownList;
    }

    const transformJobTitleData = (jobTitleList) => {
        let dropdownList = [];
        jobTitleList.forEach(j => {
            const jobTitleItem = {
                key: j.id,
                text: j.job_title,
                value: j.id    
            }
            dropdownList.push(jobTitleItem);
        })
        return dropdownList;
    }

    const updateEmployeeList = (employee) => {
        const employeeIndex = employees.findIndex(e => e.id === employee.id);
        employees[employeeIndex] = employee;
        setEmployees(employees);
    }

    const renderEmployee = (employeeId) => {
        const employee = employees.find(e => e.id === parseInt(employeeId))
        return <Employee 
            employee={employee} 
            departmentList={departmentList} 
            jobTitleList={jobTitleList}
            updateEmployeeList={updateEmployeeList}
            />
    }

    // backend call with filters as parameters
    const handleFilterSearch = () => {
        const url = new URL("http://localhost:3000/api/v1/employees");
        const params = {jobTitle: filters.jobTitle, department: filters.department}
        url.search = new URLSearchParams(params).toString();
        fetch(url)
        .then(res => res.json())
        .then(employeeData => {
            setEmployees(employeeData);
        });   
    }

    // handle filter changes in filters
    const handleChange = (e, { name, value }) => {
        setFilters({...filters, [name]: value })
    }

    const getJobTitle = (id) => {
        return jobTitleList.find(d => d.value === id).text
    }

    const getDepartment = (id) => {
        return departmentList.find(d => d.value === id).text;
    }

    const renderAllEmployees = () => {
        return employees.map(e => {
            return (
                <Card key={e.id}>
                    <Image src={e.photo} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{e.first_name + " " + e.last_name}</Card.Header>
                        <Card.Meta>{jobTitleList.length === 0 ? null : getJobTitle(e.job_title_id)}</Card.Meta>
                        <Card.Meta>{departmentList.length === 0 ? null : getDepartment(e.department_id)}</Card.Meta>
                        <Card.Description>
                            {e.bio}
                        </Card.Description>
                        <Link to={`${routeMatch.url}/${e.id}`}> Edit</Link>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            Year Started: {e.year_joined}
                        </a>
                    </Card.Content>
                </Card>
            )
        })
    }

	return (
		<div>
			<Switch>
                <Route path={`${routeMatch.path}/:employeeId`} render={({ match }) => {
                    return renderEmployee(match.params.employeeId);
                }} />
				<Route path={routeMatch.path}>
                    <Container fluid style={{ marginTop: '2em', padding: '5em' }}>
                        <Header as='h3'>Filter:</Header>
                        <Grid.Row>
                            <Grid.Column>
                                <Dropdown placeholder='Department' name='department' search selection closeOnEscape onChange={handleChange} options={departmentList} />{'  '}
                                <Dropdown placeholder='Job Title' name='jobTitle' search selection closeOnEscape onChange={handleChange} options={jobTitleList} />{'  '}
                                <Button as='a' tabIndex='0' onClick={handleFilterSearch}>Search</Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Header as='h3'>Employees:</Header>
                        <Card.Group>
                            {renderAllEmployees()}
                        </Card.Group>
                    </Container>
				</Route>
			</Switch>
		</div>
	);
}

export default EmployeeContainer;