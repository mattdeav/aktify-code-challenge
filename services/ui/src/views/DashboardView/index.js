import React from 'react';
import {Link} from 'react-router-dom';

const DashboardView = () => (
    <>
        <h1>Dashboard View</h1>

        <ul>
            <li><Link to="/campaigns">Campaign List</Link></li>
        </ul>
    </>
);

export default DashboardView;
