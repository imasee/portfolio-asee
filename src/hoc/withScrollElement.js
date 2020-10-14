import React from 'react';
import { Element } from 'react-scroll';


export default function (Component) {
    return function ({ name, ...rest }) {
        return (
            <Element name={name}>
                <Component {...rest} />
            </Element>
        )
    }
}