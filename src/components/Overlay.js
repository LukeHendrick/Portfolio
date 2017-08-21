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
                    <Modal.Title>{this.props.site.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image responsive className="modal-image" src={this.props.site.img} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel illo commodi et! Porro nisi, sit perferendis impedit nemo totam commodi accusamus a quis illo eius neque laboriosam nam eos explicabo!
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}