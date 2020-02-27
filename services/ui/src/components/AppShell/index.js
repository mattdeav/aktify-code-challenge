import React, {useCallback, useState} from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import AppHeader from '../AppHeader';
import AppNavDrawer from '../AppNavDrawer';

const useStyles = makeStyles(theme => ({
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    root: {
        display: 'flex',
    },
}));

const AppShell = ({children}) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuButtonClick = useCallback(() => {
        setDrawerOpen(true);
    }, [setDrawerOpen]);

    const handleDrawerClose = useCallback(() => {
        setDrawerOpen(false);
    }, [setDrawerOpen]);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppHeader onMenuButtonClick={handleMenuButtonClick}/>
            <AppNavDrawer open={drawerOpen} onDrawerClose={handleDrawerClose}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    {children}
                </Container>
            </main>
        </div>
    );
};

export default AppShell;
