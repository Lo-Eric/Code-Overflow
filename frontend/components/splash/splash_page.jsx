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
                <p>Code Overflow is an open community for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.</p>
            </section>
            <section className="content2-2">
                <div id="box1">
                    <img src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f" alt=""/>
                    <h1>Public Q &#38; A</h1>
                    <p>Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.</p>
                    <button className="button1">Browse questions</button>
                </div>
                <div id="box2">
                    <img src="https://cdn.sstatic.net/Img/home/private-qa.svg?v=2c1de180b6d7" alt="" />
                    <h1>Private Q &#38; A</h1>
                    <p>Level up with Code Overflow while you work. Share knowledge privately with your coworkers using our flagship Q &#38; A engine.</p>
                    <button className="button2">Try for free</button>
                </div>
                <div id="box3">
                    <img src="https://cdn.sstatic.net/Img/home/private-qa.svg?v=2c1de180b6d7" alt="" />
                    <h1>Browse jobs</h1>
                    <p>Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.</p>
                    <button className="button3">Find a job</button>
                </div> 
                    
            </section>     
    </div>    
    )
};

export default Splash;
