import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';
import Dropdown from '../dropdown/dropdown';

class NavBar extends React.Component {
  render() {
    return (
    <nav className="nav"> 
        <div className="nav-left">
            <Dropdown className="dropdown"/>

            <Link to="/" className="nav__link--home">     
                <img className="nav-logo" src={window.logo} alt="nav-logo" />
                    <h1>Code {<span style={{fontWeight: "bold"}}>Overflow</span>}</h1>
            </Link> 
        </div>
        <div className="nav-right">
            <Link to="/DemoLogin" className="nav__link--demo_login">
                <h1>Demo</h1>
            </Link>
          
            <GreetingContainer className="nav__container--buttons"/>
        </div>
        </nav>
    )}
};

export default NavBar;