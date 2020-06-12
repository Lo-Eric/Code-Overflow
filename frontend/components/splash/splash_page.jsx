import React from "react";
import { Link } from 'react-router-dom';
import Footer from './footer';

const Splash = () => {
    return (
    <div className="splash_contents">
            <section className="content1">
                <h1>We &#60; 3 people who code</h1>
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
                    <img src="https://cdn.sstatic.net/Img/home/jobs.svg?v=931d6c0863ee" alt="" />
                    <h1>Browse jobs</h1>
                    <p>Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.</p>
                    <button className="button3">Find a job</button>
                </div> 
            </section>     
            <section className="content3-1">
                <h1>For businesses, by developers</h1>
                <div className="bar-pill">bar-pill</div>
                <p>Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively.</p>
            </section>
            <section className="content3-2">
                <div id="box1">
                    <img src="https://cdn.sstatic.net/Img/home/private-questions.svg?v=a4f1cfb08f7e" width="76" height="76" alt="box-1-icon" />
                    <p>Quickly find and share internal knowledge with Private Q&#38;A</p>
                </div>
                <div id="box2">
                    <img src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3" width="76" height="76" alt="box-2-icon" />
                    <p>Find the perfect candidate for your growing technical team with Talent solutions</p>
                </div>
                <div id="box3">
                    <img src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02" width="76" height="76" alt="box-3-icon" />
                    <p>Accelerate the discovery of your products or services through our Advertising platform</p>
                </div>
            </section>
            {/* <footer><Footer /></footer> */}
    </div>    
    )
};

export default Splash;
