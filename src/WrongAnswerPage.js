import React, {Component} from 'react';
import './App.css';
import {Card, CardBody, CardTitle, Col, Container} from "reactstrap";
import logo from "./delete.svg";

class WrongAnswerPage extends Component {

    render() {
        return (
            <Container>
                <Col>
                    <img src={logo} alt="logo"/>
                    <b>Game Over</b>
                </Col>
            </Container>
        );
    }

}

export default WrongAnswerPage;