import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import DemoFormContainer from './session_form/demo_form_container';
import QuestionsIndexContainer from './questions/questions_index_container';
import QuestionShowContainer from './questions/question_show_container';
import CreateQuestionContainer from './questions/create_question_container';

import Splash from './splash/splash_page';
import Dropdown from './dropdown/dropdown';
import UserHome from './user_home/user_home';
import QuestionsIndex from './questions/questions_index';
import Footer from './splash/footer';

import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';


const App = () => (
    <div className="app">
        <nav className="nav"> 
        <div className="nav-left">
            <Dropdown className="dropdown"/>

            <Link to="/" className="nav__link--home">     
                <img className="nav-logo" src={window.logo} alt="nav-logo" />
                <h1>Code Overflow </h1>
            </Link> 
        </div>
        <div className="nav-right">
            <Link to="/DemoLogin" className="nav__link--demo_login">
                <h1>Demo</h1>
            </Link>
          
            <GreetingContainer className="nav__container--buttons"/>
        </div>
        </nav>

        <Switch>
            <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute exact path="/DemoLogin" component={DemoFormContainer} />]
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/home" component={QuestionsIndexContainer} />
            <ProtectedRoute exact path="/questions/new" component={CreateQuestionContainer} />
            {/* <ProtectedRoute exact path="/questions/:questionId" component={QuestionsIndexContainer}/> */}
        </Switch>

        <nav className="footer">
            <Footer />
        </nav>
    </div>
);

export default App;
