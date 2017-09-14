import {default as React, Component} from 'react';
import {Col,Row} from 'react-bootstrap';

export default class Grid extends Component {


    render() {       
        return (
            <Row>
                <Col md={12}>
                &nbsp;
                </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p></div>
                    </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p></div>
                    </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p></div>
                    </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p></div>
                    </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p></div>
                    </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p></div>
                    </Col>
                <Col md={4}>
                 &nbsp;
                </Col>                               
            </Row>


        );
    }
}