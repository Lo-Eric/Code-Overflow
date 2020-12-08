import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavBar = () => (
    <div id='leftnav'>
        <li>
        <Link to="/home">Home</Link>
        </li>

        <li className="public">Public</li>
    </div>
)

export default LeftNavBar;