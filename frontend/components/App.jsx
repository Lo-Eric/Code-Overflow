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
import Splash from './splash/splash_page';
import Dropdown from './dropdown/dropdown';

import { AuthRoute } from '../util/route_util';

const App = () => (
    <div className="app">
        <nav className="nav"> 
            <Dropdown/>
            <Link to="/" className="nav__link--home">     
                <img className="nav-logo" src={window.logo} alt="nav-logo" />
                <h1>Code Overflow </h1>
            </Link> 

            <Link to="/DemoLogin" className="nav__link--demo_login">
                <h1>Demo</h1>
            </Link>
            <GreetingContainer className="nav__container--buttons"/>
        </nav>

        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute exact path="/DemoLogin" component={DemoFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* <AuthRoute exact path="/home" component={UserHomeContainer} /> */}
            {/* <AuthRoute exact path="/main" component={MainContainer} /> */} 
        </Switch>
    </div>
);

export default App;
