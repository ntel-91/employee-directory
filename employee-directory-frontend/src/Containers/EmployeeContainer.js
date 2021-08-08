import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
  	useParams
} from "react-router-dom";
import Employee from '../Components/Employee';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Image, Container, Dropdown, Button, Grid, Search, Header } from 'semantic-ui-react';

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
]

const EmployeeContainer = ({employees, departmentList, jobTitleList }) => {
    let routeMatch = useRouteMatch();

    const getJobTitle = (id) => {
        return jobTitleList.find(j => j.id === id).job_title;
    }

    const getDepartment = (id) => {
        return departmentList.find(d => d.id === id).department_name;
    }

    const renderAllEmployees = () => {
        return employees.map(e => {
            return (
                <Card>
                    <Image src={e.photo} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{e.first_name + " " + e.last_name}</Card.Header>
                        <Card.Meta>{getJobTitle(e.job_title_id)}</Card.Meta>
                        <Card.Meta>{getDepartment(e.department_id)}</Card.Meta>
                        <Card.Description>
                            Daniel is a comedian living in Nashville.
                        </Card.Description>
                        <Link to={`${routeMatch.url}/${e.id}`}> Edit</Link>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            Joined: 
                        </a>
                    </Card.Content>
                </Card>
            )
        })
    }

    const renderEmployee = (employeeId) => {
        const employee = employees.find(e => e.id === parseInt(employeeId))
        return <Employee employee={employee} departmentList={departmentList} jobTitleList={jobTitleList}/>
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
                                <Dropdown placeholder='Department' search selection closeOnEscape options={options} />{'  '}
                                <Dropdown placeholder='Job Title' search selection closeOnEscape options={options} />{'  '}
                                <Button as='a' tabIndex='0'>Search</Button>
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