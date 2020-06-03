import React from "react";
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
    <div className="splash_contents">
        <nav className="nav_bar"></nav>
        
        <div className="text_box1"> 
            <h1>We love people who code</h1>
            {/* <img id="image" src="assets/content1.png" alt="broken image" /> */}
            <div className="text">
                <h1>We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</h1> 
            </div>    
        </div>
    </div>
    )
};

export default Splash;
