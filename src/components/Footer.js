import Divider from '@material-ui/core/Divider';
import React from 'react';
import FooterSocialLinks from './FooterSocialLinks';


export default React.memo(function Footer() {

    return (
        //  Footer
        <React.Fragment>
            <Divider className="footer-divider" />
            <footer className="footer pl-3">
                <div className="social">
                    <FooterSocialLinks />
                </div>
                <div className="copy-right text-center">
                    <small>&copy;&nbsp;{new Date().getFullYear()}</small>
                </div>
            </footer>
        </React.Fragment>
    )
});