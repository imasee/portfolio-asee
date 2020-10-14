import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {
    Events,
    scrollSpy
} from "react-scroll";

//landing
import Landing from "../sections/landing";
//summary
import Summary from "../sections/professional-summary";
//skills
import Skills from "../sections/skills";
//resume
import Resume from "../sections/resume";
//navbar
import Appbar from "../components/appbar";
//footer
import Footer from '../components/footer';

export default function (props) {

    useEffect(() => {
        Events.scrollEvent.register("begin", function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function (to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        }
    }, []);

    return (
        <Container className="home_container p-0" fluid>
            <Appbar />
            <Landing name="home" />
            <Summary name="about" />
            <Skills name="skills" />
            <Resume name="resume" />
            <Footer />
        </Container>
    )
}