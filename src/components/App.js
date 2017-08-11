import React, { Component } from 'react';
import Landing from './Landing'
import Projects from './Projects'
import { Button } from 'react-bootstrap';
export default class App extends Component {
    render() {
        return (
            <div>
            <Landing />
            <Projects />
            <Button className='fixed-btn' href='#landing'>Back to Top</Button>
            </div>
        )
    }
}