import React, { memo } from 'react';
import { Container } from 'react-bootstrap';
import Icon from '../Icon';
import './index.scss';


export default memo(function () {
    return (<Container className="footer p-0" fluid>
        <div className="footer_text_content">
            <p className="m-0">Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="footer_social ml-auto">
            <a href="/" className="footer_social_link mr-2">
                <Icon type="fab" icon="fa-github" fontSize="1.2rem" />
            </a>
            <a href="/" className="footer_social_link">
                <Icon type="fab mr-2" icon="fa-facebook" fontSize="1.2rem" />
            </a>
            <a href="/" className="footer_social_link">
                <Icon type="fab" icon="fa-linkedin-in" fontSize="1.2rem" />
            </a>
        </div>
    </Container>)
})