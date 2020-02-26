import React from 'react';
import {Link} from 'react-router-dom';

const CampaignsView = () => (
    <>
        <h1>Campaigns View</h1>
        <p>Click on a campaign to navigate to it's details view</p>

        <ul>
            <li><Link to="/campaigns/1">Campaign 1</Link></li>
            <li><Link to="/campaigns/bigAccount">Big Account Campaign</Link></li>
            <li><Link to="/campaigns/realtime">Realtime Campaign</Link></li>
        </ul>
    </>
);

export default CampaignsView;
