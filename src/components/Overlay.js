import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
export default class Overlay extends Component {
    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={close}
            >
                <Modal.Header>
                    <Modal.Title>{this.props.site.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel illo commodi et! Porro nisi, sit perferendis impedit nemo totam commodi accusamus a quis illo eius neque laboriosam nam eos explicabo!
                                    </Modal.Body>
                <Modal.Footer>
                    <Button onClick={close}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}