import React, { memo } from 'react';
import { Nav } from "react-bootstrap";
import { ScrollLink } from 'react-scroll';
import Icon from "../Icon";

export default memo(ScrollLink(function ({ link, icon, className, ...rest }) {
    return (<Nav.Link {...rest} href="#link" className={className}>
        <Icon icon={icon} className="d-inline-block d-md-none mr-3 nav-link-icon" fontSize="1.3rem" />
        <span className="d-inline-block">{link}</span></Nav.Link>)
}));
