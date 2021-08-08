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
            <Header as='h1'>Employee Directory</Header>
                <p>This is a basic fixed menu template using fixed size containers.</p>
                <p>
                A text container is used for the main container, which is useful for single column layouts.
                </p>
  
            <Image src="https://robohash.org/adconsequunturlaudantium.png?size=200x200&set=set1" style={{ marginTop: '2em' }} />
            <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      </Container>
  
      <Segment inverted vertical style={{ margin: '3em 0em 0em', padding: '3em 0em' }}>
        <Container textAlign='center'>
            <Image centered size='mini' src='/images/wireframe/paragraph.png' />
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                </List.Item>
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