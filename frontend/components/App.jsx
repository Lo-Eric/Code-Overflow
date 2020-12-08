import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import NavBar from "./nav/navbar";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import DemoFormContainer from './session_form/demo_form_container';
import QuestionsIndexContainer from './questions/questions_index_container';
import QuestionShowContainer from './questions/question_show_container';
import CreateQuestionContainer from './questions/create_question_container';
import QuestionEditContainer from './questions/edit_question_container';

import Splash from './splash/splash_page';
import Dropdown from './dropdown/dropdown';
import UserHome from './user_home/user_home';
import QuestionsIndex from './questions/questions_index';
import Footer from './splash/footer';

import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';


const App = () => (
    <div className="app">
        <header>
            <NavBar />
        </header>

        <main>
            <Switch>
                <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
                <Route exact path="/questions/:questionId/edit" component={QuestionEditContainer} />
                <AuthRoute exact path="/" component={Splash} />
                <AuthRoute exact path="/DemoLogin" component={DemoFormContainer} />]
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path="/home" component={QuestionsIndexContainer} />
                <ProtectedRoute exact path="/question/new" component={CreateQuestionContainer} />
                {/* <ProtectedRoute exact path="/questions/:questionId" component={QuestionsIndexContainer}/> */}
            </Switch>
        </main>

        {/* <nav className="footer">
            <Footer />
        </nav> */}
    </div>
);

export default App;
