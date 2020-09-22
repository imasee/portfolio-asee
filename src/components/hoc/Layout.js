// import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import Appbar from '../Appbar';
import Footer from '../Footer';


export default function Layout({ children }) {
    // const matches = useMediaQuery('(min-width:600px)');
    // const [mobileOpen, setMobileOpen] = React.useState(false);

    // const handleDrawerToggle = React.useCallback(() => {
    //     setMobileOpen(p => (!p));
    // }, [setMobileOpen]);

    return (
        <React.Fragment>
            <Appbar />
            <div className="container-fluid p-0" style={{ width: "100vw", overflowY: "auto", overflowX: "hidden" }}>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}