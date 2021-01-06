import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavBar = () => (
    <div id='left-nav'>
        <li><Link to="/home">Home</Link></li>

        <li className="public">Public</li>

        <div className='public-content'>
        <li className="globe-link"><Link to="/home">
          <img id='globe-img' src="assets/globe.png" height='19' width='19' alt=""/>
          Code Overflow
          {/* <li>Code Overflow</li> */}
        </Link></li>

        <li className="tags">Tags</li>

        <li className="users">Users</li>
        </div>

    </div>
)

export default LeftNavBar;