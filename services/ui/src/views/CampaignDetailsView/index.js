import React from 'react';
import {useParams} from 'react-router-dom';
import {useViewTitle} from '../../contexts/ViewContext';
import Title from "../../components/Title";
import Typography from "@material-ui/core/Typography";

const CampaignDetailsView = () => {
    useViewTitle('Campaign Details');
    const { id } = useParams();

    return (
        <>
            <Title>Campaign Details View</Title>
            <Typography component="p" variant="body1">Details for campaign "{id}" coming soon...</Typography>
        </>
    );
};

export default CampaignDetailsView;
