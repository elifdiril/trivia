import React, {Component} from 'react';
import './App.css';
import {Button, Card, CardBody, Col, Container} from "reactstrap";
import Lottie from './Lottie';

class CorrectAnswerPage extends Component {
    constructor(props) {
        super(props);

        this.onClickContinueButton = this.onClickContinueButton.bind(this);
    }

    onClickContinueButton() {
        let index = 0;
        let joker = 0;
        if (this.props.location.state && this.props.location.state.questionIndex) {
            index = this.props.location.state.questionIndex;
            joker = this.props.location.state.joker;
        }
        let jokerUsed = false;
        if (this.props.location.state && this.props.location.state.jokerUsed) {
            jokerUsed = true;
        }
        if (index < 9) {
            this.props.history.push('/question', {
                questionIndex: index + 1,
                joker: joker,
                jokerUsed: jokerUsed
            });
        } else {
            this.props.history.push('/welcome');
        }

    }

    render() {
        return (
            <Container>
                <Col>
                    <Card body inverse color="info">
                        <CardBody>
                            <Lottie/>
                            <CardBody>
                                Correct!
                                You have earned 100 points
                                Total: {(this.props.location.state.questionIndex + 1) * 100}
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