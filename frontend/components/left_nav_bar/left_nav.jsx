import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavBar = () => (
    <div id='left-nav'>
        <li><Link to="/home">Home</Link></li>

        <li className="public">Public</li>

        <li><Link to="/home">
          <img id='globe' src="assets/globe.png" height='19' width='19' alt=""/>
          Code Overflow
          {/* <li>Code Overflow</li> */}
        </Link></li>
    </div>
)

export default LeftNavBar;