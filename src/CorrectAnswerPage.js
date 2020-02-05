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
        let index = this.state.qIndex;
        if(this.props.location.state && this.props.location.state.questionIndex){
            index = this.props.location.state.questionIndex;
        }
        if(index < 9){
            this.props.history.push('/question', {questionIndex: index + 1});
        }else{
            this.props.history.push('/welcome');
        }

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
                                Total: {(this.props.location.state.index + 1) * 100}
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