import React, { Component } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
export default class Overlay extends Component {
    constructor(props) {
        super(props)

        this.close = this.close.bind(this);
    }

    close() {
        this.props.hideModal()
    }
    render() {
        return (
            <Modal
                show={this.props.show}
            >
                <Modal.Header>
                    <Modal.Title><h1>{this.props.site.name}</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image responsive className="modal-image" src={this.props.site.gif} /> 
                    <h4>{this.props.site.description}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button href={this.props.site.href}>Go To Site</Button>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}