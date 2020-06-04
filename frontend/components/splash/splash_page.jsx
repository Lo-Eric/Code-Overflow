import React from "react";
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
    <div className="splash_contents">
            <section className="content1">
                <h1>We love people who code</h1>
                <h4>We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</h4>
            </section>
            <section className="content2-1">
                <h1>For developers, by developers</h1>
                <div>bar-pill</div>
                <p>Stack Overflow is an open community for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.</p>
            </section>
            <section className="content2-2">
                <div id="box1">
                    <img src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f" alt=""/>
                    <h1>Public Q &#38; A</h1>
                    <p>Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.</p>
                </div>
                <div id="box2">Private Q &#38; A</div>
                <div id="box3">Browse Jobs</div>  
            </section>     
    </div>    
    )
};

export default Splash;
