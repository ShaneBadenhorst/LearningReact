import {default as React, Component} from 'react';
import {Col,Glyphicon} from 'react-bootstrap';

export default class Footer extends Component {


    render() {
                return (
            <Col md={12}>
                
                <Col md={4}>
                    <hr/>
                     <h5 className="pull-left"><Glyphicon glyph="glyphicon glyphicon-copyright-mark" />&nbsp;COMPRSA</h5>
                </Col>
                                              
            </Col>


        );
    }
}