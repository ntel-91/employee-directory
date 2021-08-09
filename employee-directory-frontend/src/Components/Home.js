import React from 'react';
import {
    Container,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Home = () => {
    return (
        <div>
        <Container text style={{ marginTop: '7em' }}>
            <div style={{display: "flex", "flex-direction": "column", "align-items": "center"}}>
                <Header as='h1'>Employee Directory</Header>
                <Image src="https://robohash.org/adconsequunturlaudantium.png?size=200x200&set=set1" style={{ marginTop: '2em', height: '200px', width: '200px' }} />
            </div>
            <p></p>
            <p>
                <h4>Features:</h4>
                <ul>
                    <li>View all employees</li>
                    <li>Filter employees by Department and Job Title</li>
                    <li>Edit Employee details including first name, last name, bio, department, and job title</li>
                </ul>
            </p>
            <p>
                <h4>Built with:</h4>
                <ul>
                    <li>React</li>
                    <li>Ruby on Rails API</li>
                    <li>Semantic React UI</li>
                </ul>
            </p>
            
      </Container>
  
      <Segment inverted vertical style={{ margin: '3em 0em 0em', padding: '3em 0em' }}>
        <Container textAlign='center'>
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    email: ntelenson@gmail.com
                </List.Item>
                <List.Item as='a' href='#'>
                    (717) 321-3758
                </List.Item>
            </List>
        </Container>
      </Segment>
      </div>
    )
}

export default Home;