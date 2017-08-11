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
        setTimeout(this.fadeIn('name'), 1200);
    }

    render() {
        return (
            <div className='landing' id='landing'>
            <Grid className='container-fluid'>
                <Row>
                    <Col xs={12} lg={6}>
                        <Image src={myProfile} responsive circle />
                    </Col>
                    <Col xs={6} lg={6}>
                        <h1 className='name'>Luke Hendrick</h1>
                    </Col>
                    <Col xs={2}>
                        <a href="https://www.github.com/LukeHendrick"><FontAwesome name='github-square' /></a>
                    </Col>
                    <Col xs={2}>
                        <a href="https://www.twitter.com/LukeHendrick521"><FontAwesome name='twitter-square' /></a>
                    </Col>
                    <Col xs={2}>
                        <a href="https://www.github.com/LukeHendrick"><FontAwesome name='medium' /></a>
                    </Col>
                </Row>
                <Row>
                    <a href="#projects"><FontAwesome name="chevron-down" /></a>
                </Row>
            </Grid>
            </div>
        )
    }
}