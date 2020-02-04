import React, {Component} from 'react';
import './App.css';
import {Button, Card, CardBody, Col, Container} from "reactstrap";
import logo from "./delete.svg";

class WrongAnswerPage extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //
        // }
        this.onClickNewGameButton = this.onClickNewGameButton.bind(this);
    }

    onClickNewGameButton(){
        this.props.history.push('/welcome');
    }

    render() {
        return (
            <Container>
                <Col xs={6}>
                    <Card>
                        <img src={logo} alt="logo" className="App-logo"/>
                        <CardBody> <b>Game Over</b> </CardBody>
                        <Button color="danger" onClick={this.onClickNewGameButton}>New Game</Button>
                    </Card>
                </Col>
            </Container>
        );
    }

}

export default WrongAnswerPage;