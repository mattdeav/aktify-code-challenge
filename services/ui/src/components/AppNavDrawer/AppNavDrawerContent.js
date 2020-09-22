import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import {makeStyles} from '@material-ui/core/styles';
import React, {Fragment} from 'react';
import useLinkRenderer from '../../hooks/useLinkRenderer';
import * as icons from '../../icons';
import routes from '../../routes';

const NavListItem = ({label, icon: Icon, to}) => {
    const renderLink = useLinkRenderer(to);

    return (
        <ListItem button component={renderLink} key={label}>
            <ListItemIcon>
                <Icon/>
            </ListItemIcon>
            <ListItemText primary={label}/>
        </ListItem>
    );
};

const sections = [
    {
        id: 'dashboard',
        items: [
            {
                id: 'workspaceDashboard',
                icon: icons.DashboardIcon,
                label: 'Dashboard',
                to: routes.dashboard,
            },
        ],
    },
    {
        id: 'campaign',
        subHeader: 'Campaign Management',
        items: [
            {
                id: 'workspaceCampaigns',
                icon: icons.CampaignIcon,
                label: 'Campaigns',
                to: routes.campaignList,
            },
        ],
    },
];

const useStyles = makeStyles(theme => ({
    logo: {
        height: 'auto',
        width: '50%',
    },
    toolbar: theme.mixins.toolbar,
}));

const AppNavDrawerContent = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.toolbar}>
                <Box alignItems="center" display="flex" justifyContent="center" height="100%" />
            </Box>
            {sections.map(({id, subHeader, items}) => (
                <Fragment key={id}>
                    <Divider/>
                    {subHeader && <ListSubheader inset>{subHeader}</ListSubheader>}
                    {items.map(item => <NavListItem key={item.id} {...item}/>)}
                </Fragment>
            ))}
        </>
    );
};

export default AppNavDrawerContent;