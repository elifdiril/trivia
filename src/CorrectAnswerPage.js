import React, {Component} from 'react';
import './App.css';
import logo from './correct.svg';
import {Button, Card, CardBody, CardTitle, Col, Container} from "reactstrap";

class CorrectAnswerPage extends Component {

    render() {
        return (
            <Container>
                <Col><div>
                    <img src={logo} alt="logo"/>
                </div>
                </Col>
            </Container>
        );
    }

}

export default CorrectAnswerPage;