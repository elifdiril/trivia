import React, {Component} from 'react';
import './App.css';
import {Button, Card, CardBody, Col, Container} from "reactstrap";
import logo from "./delete.svg";

class WrongAnswerPage extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            point: (this.props.location.state.questionIndex) * 100
        });
        this.onClickNewGameButton = this.onClickNewGameButton.bind(this);
    }

    onClickNewGameButton() {
        this.props.history.push('/welcome', {point: this.state.point});
    }

    render() {
        return (
            <Container>
                <Col>
                    <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                        <img src={logo} alt="logo" className="App-logo"/>
                        <CardBody> <b>Game Over</b> </CardBody>
                        <Button color="danger" onClick={this.onClickNewGameButton}>New Game</Button>
                        <div>Total Points: {this.state.point}</div>                        
                    </Card>
                </Col>
            </Container>
        );
    }
}

export default WrongAnswerPage;