import {default as React, Component} from 'react';
import {Row,Nav, NavItem, Col} from 'react-bootstrap';

export default class Navbar extends Component {

    render() {
        return (
            
            <div className="header clearfix">
                <Col md={12}>&nbsp;</Col>
                <Col md={6}>
                <h3 className="text-muted">My Project</h3>
                </Col>
                <Col md={6}>
                <Nav bsStyle="pills" className="pull-right"  activeKey={1} onSelect={handleSelect}>
                    <NavItem eventKey={1} href="/home">Home</NavItem>
                    <NavItem eventKey={2} title="Item">About</NavItem>
                    <NavItem eventKey={3}>Contact</NavItem>
                </Nav>
                </Col>
                <hr/>
            </div>
                );

        function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
        }
    }
}