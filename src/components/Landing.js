import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Image, Grid, Row, Col, Clearfix, Button } from 'react-bootstrap';
import myProfile from '../images/profile.png'

export default class Landing extends Component {
    constructor(props) {
        super(props)

    }
    fadeIn(name) {
        let select = document.getElementsByClassName(name);
        let classItem = 'load';
        console.log(select, classItem);
        select.className += classItem;
    }

    componentDidMount() {
        let name = document.getElementsByClassName('name');
        let image = document.getElementsByClassName('myImg');
        let git = document.getElementsByClassName('fa')
        window.setTimeout(() => {
            image[0].className += ' testLoad'
        }, 100);
        window.setTimeout(() => {
            name[0].className += ' testLoad'
        }, 500);
        window.setTimeout(() => {
            git[0].className += ' testLoad'
        }, 1500)
        window.setTimeout(() => {
            git[1].className += ' testLoad'
        }, 1500)
        window.setTimeout(() => {
            git[2].className += ' testLoad'
        }, 1500)
        window.setTimeout(() => {
            git[3].className += ' testLoad'
        }, 1500)
    
    
    }

    render() {
        return (
            <div className='landing' id='landing'>
            <Grid className='container-fluid'>
                <Row>
                    <Col xs={12} lg={6}>
                        <Image className="myImg" src={myProfile} responsive circle />
                    </Col>
                    <Col xs={6} lg={6}>
                        <h1 className='name'>Luke Hendrick</h1>
                    </Col>
                    <Col xs={2}>
                        <a className="text-shadow" href="https://www.github.com/LukeHendrick"><FontAwesome name='github-square' /></a>
                    </Col>
                    <Col xs={2}>
                        <a className="text-shadow" href="https://www.linkedin.com/in/luke-hendrick-5a5a14127"><FontAwesome name='linkedin-square' /></a>
                    </Col>
                    <Col xs={2}>
                        <a className="text-shadow" href="mailto:lukehendrick41@gmail.com"><FontAwesome name='envelope-square' /></a>    
                    </Col>
                </Row>
                <Row>
                    <a className="text-shadow"  href="#projects"><FontAwesome name="chevron-down" /></a>
                </Row>
            </Grid>
            </div>
        )
    }
}