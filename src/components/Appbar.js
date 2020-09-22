import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import React, { memo } from 'react';
import Navbarlogo from './Nabarlogo';
import Navlink from './Navlinks';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        margin: 0
    },
    menuIcon: {
        height: theme.spacing(4),
        width: theme.spacing(4)
    },
    links: {
        flexGrow: 1
    },
    title: {
        flexGrow: 0,
    },
}));

export default memo(function Appbar({ handleSidebarToggle }) {
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    //menu button - visible only in mobile view
    const SmVisibleMenuButton = React.useMemo(() => (
        <Hidden mdUp implementation="css">
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.menuButton}
                onClick={handleSidebarToggle}
            >
                <MenuIcon className={classes.menuIcon} />
            </IconButton>
        </Hidden>
    ), [handleSidebarToggle, classes.menuButton, classes.menuIcon])

    //navlinks - hidden in mobile view
    const SmHiddenNavLink = React.useMemo(() => (
        <Hidden smDown implementation="css">
            <Navlink />
        </Hidden>
    ), [])

    return (
        <React.Fragment>
            <AppBar position="fixed" elevation={trigger ? 4 : 0} className={["appbar", trigger ? "solid" : "transparent"].join(" ")}>
                <Toolbar style={{ height: "86px" }}>
                    {/* visible mobile */}
                    {SmVisibleMenuButton}

                    {/* mobile hidden */}
                    <Container disableGutters className={classes.links}>
                        {SmHiddenNavLink}
                    </Container>
                    <Typography variant="h6" className={classes.title}>
                        <Navbarlogo />
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment >
    );
});