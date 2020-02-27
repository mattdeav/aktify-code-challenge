import {useQuery} from '@apollo/client';
import Typography from '@material-ui/core/Typography';
import gql from 'graphql-tag';
import React from 'react';
import {useParams} from 'react-router-dom';
import Title from '../../components/Title';
import {useViewTitle} from '../../contexts/ViewContext';

const GET_CAMPAIGN = gql`
    query ListCampaigns($id: Int!) {
        campaign(id: $id) @rest(type: "Campaign", path: "/campaigns/{args.id}") {
            id
            name
            createdOn
            updatedOn
        }
    }
`;

const CampaignDetailsView = () => {
    useViewTitle('Campaign Details');
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_CAMPAIGN, { variables: { id } });

    if (loading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return <span>An error occurred. We could not fetch the campaign</span>;
    }

    const campaign = data?.campaign || {};

    return (
        <>
            <Title>{campaign.name}</Title>
            <Typography component="p" variant="body1">{campaign.name} was created on {campaign.createdOn}</Typography>
        </>
    );
};

export default CampaignDetailsView;
