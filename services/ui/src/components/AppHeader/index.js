import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types'
import React, {useContext} from 'react';
import ViewContext from '../../contexts/ViewContext';

const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${theme.drawerWidth}px)`,
            marginLeft: theme.drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
}));

const AppHeader = ({onMenuButtonClick}) => {
    const classes = useStyles();
    const {title} = useContext(ViewContext);

    return (
        <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
                <Hidden lgUp implementation="css">
                    <IconButton
                        aria-controls="nav-drawer"
                        aria-label="open nav drawer"
                        className={classes.menuButton}
                        color="inherit"
                        edge="start"
                        id="nav-drawer-toggle"
                        onClick={onMenuButtonClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

AppHeader.propTypes = {
    onMenuButtonClick: PropTypes.func.isRequired,
};

export default AppHeader;