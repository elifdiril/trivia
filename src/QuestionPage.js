import React, {Component} from 'react';
import './App.css';
import {Button, Row, Card, CardBody, CardTitle, Col, Container} from "reactstrap";
import axios from 'axios';

class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            correctAnswers: [],
            incorrectAnswers: [],
            questionIndex: 0,
            joker: (this.props.location.state && this.props.location.state.joker) || false,
            jokerUsed: (this.props.location.state && this.props.location.state.joker) || false,
        };
        this.onClickAnswerButton = this.onClickAnswerButton.bind(this);
    }

    componentDidMount() {
        axios.get('http://www.mocky.io/v2/5e3802b83100005100d37e37')
            .then(response => {
                if (response && response.data) {
                    let val = response.data.results;
                    let values = {
                        questions: [],
                        correctAnswers: [],
                        incorrectAnswers: []
                    };

                    for (let i = 0; i < val.length; i++) {
                        values.questions.push(val[i].question);
                        values.correctAnswers.push(val[i].correct_answer);
                        values.incorrectAnswers.push(val[i].incorrect_answers);
                    }

                    this.setState({
                        questions: values.questions,
                        correctAnswers: values.correctAnswers,
                        incorrectAnswers: values.incorrectAnswers
                    });
                }
            });

    }

    onClickAnswerButton(answer) {
        let index = this.state.questionIndex;
        let joker = this.state.joker;
        let jokerUsed = this.state.jokerUsed;
        let correctAns = this.state.correctAnswers[index];

        if (this.props.location.state && this.props.location.state.questionIndex) {
            index = this.props.location.state.questionIndex;
        }

        if (this.props.location.state && this.props.location.state.joker) {
            joker = this.props.location.state.joker;
        }

        if (this.props.location.state && this.props.location.state.jokerUsed) {
            jokerUsed = this.props.location.state.jokerUsed;
        }

        if (answer === correctAns) {
            this.props.history.push('/correct-answer', {questionIndex: index, joker: joker, jokerUsed: jokerUsed});
        } else
            this.props.history.push('/wrong-answer', {questionIndex: index});
    }

    shuffle(array) {
        let i, j, temp;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    render() {
        let index = this.state.questionIndex;
        let answerArray = [];

        if (this.props.location.state && this.props.location.state.questionIndex) {
            index = this.props.location.state.questionIndex;
        }

        answerArray.push(this.state.correctAnswers[index]);

        if (this.state.incorrectAnswers.length > 0) {
            answerArray.push(this.state.incorrectAnswers[index][0]);
            answerArray.push(this.state.incorrectAnswers[index][1]);
            answerArray.push(this.state.incorrectAnswers[index][2]);
        }
        this.shuffle(answerArray);

        if (this.state.joker === true) {
            answerArray = [];
            answerArray.push(this.state.correctAnswers[index]);
            answerArray.push(this.state.incorrectAnswers[0]);
        }

        return (
            <Container>
                <Col md={{size: 6, offset: 3}}>
                    <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                        <CardBody>
                            <CardTitle>{this.state.questions[index]}</CardTitle>
                            {((!this.state.joker && !(this.props.location.state && this.props.location.state.jokerUsed)) ||
                                (this.state.joker && (this.props.location.state && this.props.location.state.jokerUsed))) &&
                            <Col>
                                <Row>
                                    <Button color="warning"
                                            onClick={() => this.onClickAnswerButton(answerArray[0])}>{answerArray[0]}</Button>
                                </Row>
                                <Row>
                                    <Button color="warning"
                                            onClick={() => this.onClickAnswerButton(answerArray[1])}>{answerArray[1]}</Button>
                                </Row>
                                <Row>
                                    <Button color="warning"
                                            onClick={() => this.onClickAnswerButton(answerArray[2])}>{answerArray[2]}</Button>
                                </Row>
                                <Row>
                                    <Button color="warning"
                                            onClick={() => this.onClickAnswerButton(answerArray[3])}>{answerArray[3]}</Button>
                                </Row>
                            </Col>
                            }
                            {this.state.joker && !(this.props.location.state && this.props.location.state.jokerUsed) &&
                            <Col>
                                <Row>
                                    <Button color="warning"
                                            onClick={() => this.onClickAnswerButton(answerArray[0])}>{answerArray[0]}</Button>
                                </Row>
                                <Row>
                                    <Button color="warning"
                                            onClick={() => this.onClickAnswerButton(answerArray[1])}>{answerArray[1]}</Button>
                                </Row>
                            </Col>
                            }
                            <Button color="info" className="float-right" disabled={this.state.joker}
                                    onClick={() => this.setState({joker: true, jokerUsed: true})}>50% Joker</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        );
    }
}

export default QuestionPage;