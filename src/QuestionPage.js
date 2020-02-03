import React, {Component} from 'react';
import './App.css';
import {Button, Card, CardBody, CardTitle, Col, Container} from "reactstrap";
import axios from 'axios';

class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            correctAnswers: [],
            incorrectAnswers: [],
            questionIndex: 0,
            points:0
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
                    console.log(this.state.incorrectAnswers);
                }
            });

    }

    onClickAnswerButton(answer){
        let index = this.state.questionIndex;
        let correctAns = this.state.correctAnswers[index];

        if(answer === correctAns){
            this.props.history.push('/correct-answer', {index: this.state.questionIndex});
        }
        else
            this.props.history.push('/wrong-answer');
    }

    render() {
        let index = this.state.questionIndex;
        return (
            <Container>
                <Col>
                    <Card>
                        <CardBody >
                            <CardTitle>{this.state.questions[index]}</CardTitle>
                            <Button color="primary" > {this.state.correctAnswers[index]} </Button>
                            <Button color="primary"> 2 </Button>
                            <Button color="primary"> 3 </Button>
                            <Button color="primary"> 4 </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        );
    }
}

export default QuestionPage;