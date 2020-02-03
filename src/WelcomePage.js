import React, {Component} from 'react';
import './App.css';
import logo from './wisdom.svg';
import {Button} from 'reactstrap';
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
            <Container className={"textAlign :center"}>
                <Col xs={6} className="textAlign: center">
                    <Card>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <CardBody>
                            <CardTitle><b> A Trivia Game </b></CardTitle>
                            <Button color="primary" onClick={this.onClickGetStarted}>Get Started</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        );
    }
}

export default WelcomePage;
