import React, {Component} from 'react';
import './App.css';
import {Button} from 'reactstrap';
import WelcomeLottie from './WelcomeLottie';
import {
    Container, Col, Card, CardBody,
    CardTitle
} from 'reactstrap';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            options: [],
            selectedAnswer: '',
            correctAnswer: ''
        };
        this.onClickGetStarted = this.onClickGetStarted.bind(this);
    }

    onClickGetStarted() {
        this.props.history.push('/question')
    }


    render() {
        return (
            <div className="d-flex align-items-center">
                <Container>
                    <Col>
                        <Card body inverse color="danger">
                            <WelcomeLottie />
                            <CardBody>
                                <CardTitle><b> A Trivia Game </b></CardTitle>
                                <Button color="dark" onClick={this.onClickGetStarted}>Get Started</Button>
                                <div>
                                    {(this.props.location.state && this.props.location.state.point) &&
                                    <b>Last Score: {this.props.location.state.point}</b>}
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default WelcomePage;
