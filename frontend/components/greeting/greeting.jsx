import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login" className="login-button">Log in</Link>
            <Link to="/signup" className="signup-button">Sign up</Link>
            {/* <button className="linked-in-nav" onClick={() => window.location.href = "https://www.linkedin.com/"}>LinkedIn</button> */}
        </nav>
    );
    const personalGreeting = () => (
        <nav className="greeting-group">
            <h2 className="greeting">Hi, {currentUser.username}!</h2>
            <button className="greeting-button" onClick={logout}>Log Out</button>
        </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
