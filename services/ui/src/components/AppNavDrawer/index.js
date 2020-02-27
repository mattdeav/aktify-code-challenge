import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import AppNavDrawerContent from './AppNavDrawerContent';

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('lg')]: {
            flexShrink: 0,
            width: `${theme.drawerWidth}px`,
        }
    },
    drawerPaper: {
        width: theme.drawerWidth,
    },
}));

const AppNavDrawer = ({open, onDrawerClose}) => {
    const classes = useStyles();

    return (
        <nav className={classes.drawer}>
            <Hidden lgUp implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    id="nav-drawer"
                    ModalProps={{keepMounted: true}}
                    open={open}
                    onClose={onDrawerClose}
                    variant="temporary"
                >
                    <AppNavDrawerContent/>
                </Drawer>
            </Hidden>
            <Hidden mdDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    id="nav-drawer"
                    open
                    variant="permanent"
                >
                    <AppNavDrawerContent/>
                </Drawer>
            </Hidden>
        </nav>
    );
};

AppNavDrawer.propTypes = {
    open: PropTypes.bool.isRequired
};

export default AppNavDrawer;