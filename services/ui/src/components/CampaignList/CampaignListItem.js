import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import useLinkRenderer from '../../hooks/useLinkRenderer';
import routes from '../../routes';
import {CampaignType} from './propTypes';

export const CampaignListItem = ({campaign}) => {
    const renderLink = useLinkRenderer(routes.campaignDetails(campaign));

    return (
        <ListItem button component={renderLink} key={campaign.id}>
            <ListItemText
                primary={campaign.name}
                secondary={`Created: ${campaign.createdOn}`}
            />
        </ListItem>
    );
};

CampaignListItem.propTypes = {
    campaign: CampaignType.isRequired,
};
