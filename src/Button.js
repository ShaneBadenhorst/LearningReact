import {default as React, Component} from 'react';
import {Button,Jumbotron,Col} from 'react-bootstrap';
import './App.css';

export default class MyDropdown extends Component {


    render() {
        let myTitle =
                    <h1 className="display-3">Jumbotron heading</h1>

        return (
                    <Jumbotron >
                        {myTitle}
                            <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p style={{textAlign:'center'}}><Button bsSize="large" bsStyle="success">Sign Up</Button></p>
                    </Jumbotron>
        );
    }
}