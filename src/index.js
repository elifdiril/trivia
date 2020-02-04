import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import QuestionPage from "./QuestionPage";
import CorrectAnswerPage from "./CorrectAnswerPage";
import WrongAnswerPage from "./WrongAnswerPage";
import WelcomePage from "./WelcomePage";

const routing = (
    <Router>
        <div>
            <Route exact path= {["/welcome", "/"]} component={WelcomePage} />
            <Route path="/question" component={QuestionPage} />
            <Route path="/correct-answer" component={CorrectAnswerPage} />
            <Route path="/wrong-answer" component={WrongAnswerPage} />
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();