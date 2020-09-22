import { Container } from "@material-ui/core";
import React from "react";
import Appbar from './Appbar';
import Summary from './Summary';
import Landing from './Landing';

export default function Main() {
    return (
        <React.Fragment>
            <Landing />
            <Summary />
        </React.Fragment>
    )
}