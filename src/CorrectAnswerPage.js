import React, {Component} from 'react';
import './App.css';
import logo from './correct.svg';
import {Button, Card, CardBody, Col, Container} from "reactstrap";

class CorrectAnswerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qIndex: 0
        };
        this.onClickContinueButton = this.onClickContinueButton.bind(this);
    }

    onClickContinueButton() {
        this.props.history.push('/question', {questionIndex: this.state.qIndex + 1});
    }

    render() {
        return (
            <Container>
                <Col xs={6}>
                    <Card body inverse color="info">
                        <CardBody>
                            <img src={logo} className="App-logo" alt="logo"/>
                            <CardBody>
                                Correct!
                                You have earned 100 points
                                Total: {(this.props.qIndex + 2) * 100}
                            </CardBody>
                            <Button onClick={this.onClickContinueButton}> Continue </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        );
    }

}

export default CorrectAnswerPage;