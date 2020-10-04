import React from "react";
import Landing from './Landing';
import Summary from './Summary';
import Skills from './skill-section';
import Education from './education';
import Projects from './projects';

export default function Main() {
    return (
        <React.Fragment>
            <Landing />
            <Summary />
            <Skills />
            <Education />
            <Projects />
        </React.Fragment>
    )
}