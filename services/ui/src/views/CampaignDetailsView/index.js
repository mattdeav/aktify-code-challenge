import React from 'react';
import {useParams} from 'react-router-dom';

const CampaignDetailsView = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Campaign Details View</h1>
            <p>
                Campaign details for campaign with id: {id}
            </p>
        </>
    );
};

export default CampaignDetailsView;
