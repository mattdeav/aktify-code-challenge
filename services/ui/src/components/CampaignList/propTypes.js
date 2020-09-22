import PropTypes from 'prop-types';

export const CampaignType = PropTypes.shape({
    createdOn: PropTypes.string,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    updatedOn: PropTypes.string,
});
