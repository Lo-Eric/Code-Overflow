import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavBar = () => (
    <div id='leftnav'>
        <Link to="/home">
            <li>Home</li>
        </Link>
    </div>
)

export default LeftNavBar;