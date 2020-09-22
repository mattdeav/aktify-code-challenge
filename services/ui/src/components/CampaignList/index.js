import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React from 'react';
import {CampaignListItem} from './CampaignListItem';
import {CampaignType} from './propTypes';

export const CampaignList = ({campaigns}) => (
    <List>
        {campaigns.map(campaign => <CampaignListItem campaign={campaign} key={campaign.id} />)}
    </List>
);

CampaignList.defaultProps = {
    campaigns: [],
};

CampaignList.propTypes = {
    campaigns: PropTypes.arrayOf(CampaignType),
};

export default CampaignList;
