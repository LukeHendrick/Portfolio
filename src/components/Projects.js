import React, {Component} from 'react';
import { Row, Col, OverlayTrigger, Thumbnail, Tooltip } from 'react-bootstrap';
import Overlay from './Overlay';
import sites from './Sites';
export default class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
        this.ModalShow = this.ModalShow.bind(this);
    }

    ModalShow() {
        this.setState(() => {
            return {
                show: true
            }
        })
    }

    render() {
        let close = () => this.setState({ show: false });
        return (
            <div className='row projects' id="projects">
                <h1 className='project-title'>Projects</h1>
                <Row>
                    {sites.map((site, index) => {
                        return (
                            <Col key={index} lg={6} md={6} sm={6} xs={12}>
                                <OverlayTrigger placement='top' overlay={<Tooltip id='tooltip'><strong>{site.name}</strong></Tooltip>}>
                                    <Thumbnail className='thumb' key={site.index} onClick={this.ModalShow} target="_blank" alt={site.name} src={site.img} />
                                </OverlayTrigger>
                                <Overlay site={site} show={this.state.show}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}