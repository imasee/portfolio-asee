import { Container, makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import Footer from '../Footer';
import Appbar from '../Appbar';

const useStyles = makeStyles({
    toppPadding: {
        paddingTop: "86px"
    },
    marginNone: {
        margin: 0
    }
});

export default function Layout({ children }) {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = React.useCallback(() => {
        setMobileOpen(p => (!p));
    }, [setMobileOpen]);

    return (
        <React.Fragment>
            <Appbar handleSidebarToggle={handleDrawerToggle} />
            <Container disableGutters className={classes.marginNone}>
                {children}
            </Container>
            <Footer />
        </React.Fragment>
    )
}