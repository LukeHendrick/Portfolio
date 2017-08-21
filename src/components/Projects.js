import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import Project from './Project'
import sites from './Sites';


export default class Projects extends Component {
    render() {
        let close = () => this.setState({ show: false });
        return (
            <div className='row projects' id="projects">
                <h1 className='project-title'>Projects</h1>
                <Row>
                    {sites.map((site, index) => {
                        return (
                            <Project site={site} key={index} />
                        )
                    })}
                </Row>
            </div>
        )
    }
}