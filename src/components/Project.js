import React, { Component } from 'react';
import { Row, Col, OverlayTrigger, Thumbnail, Tooltip } from 'react-bootstrap';
import Overlay from './Overlay';

export default class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }

        this.ModalShow = this.ModalShow.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    ModalShow() {
        this.setState(() => {
            return {
                show: true
            }
        })
    }
    hideModal() {
        this.setState(() => {
            return {
                show: false
            }
        })
    }
    render() {
        let site = this.props.site
        return (
            <Col lg={6} md={6} sm={6} xs={12}>
                <OverlayTrigger placement='top' overlay={<Tooltip id='tooltip'><strong>{site.name}</strong></Tooltip>}>
                    <Thumbnail className='thumb' key={site.index} onClick={this.ModalShow} target="_blank" alt={site.name} src={site.img} />
                </OverlayTrigger>
                <Overlay site={site} show={this.state.show} hideModal={this.hideModal}/>
             </Col>
        )
    }
}
