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
            points: 0
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
        let correctAns = this.state.correctAnswers[index];

        if (answer === correctAns) {
            this.props.history.push('/correct-answer', {index: this.state.questionIndex, points: this.state.points});
        } else
            this.props.history.push('/wrong-answer', {points: this.state.points});
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
        answerArray.push(this.state.correctAnswers[index]);
        if (this.state.incorrectAnswers.length > 0) {
            answerArray.push(this.state.incorrectAnswers[index][0]);
            answerArray.push(this.state.incorrectAnswers[index][1]);
            answerArray.push(this.state.incorrectAnswers[index][2]);
        }
        this.shuffle(answerArray);

        return (
            <Container>
                <Col xs={6}>
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardBody>
                            <CardTitle>{this.state.questions[index]}</CardTitle>
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
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        );
    }
}

export default QuestionPage;