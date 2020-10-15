import React, { memo } from 'react';
import "./index.scss";
import { Container } from 'react-bootstrap';
import Section from "../../components/section";
import ProjectItem from './ProjectItem';
import withScrollElement from '../../hoc/withScrollElement';


export default memo(withScrollElement(function ({ data = [] }) {

    return (
        <Section className="my_projects" headingFirst="My" headingSecond="Projects">
            <Container className="projects_wrapper p-0" fluid>
                {data.map((project, i) => (
                    <ProjectItem data={project} key={i} delay={(i + 1) * 300} />))}
            </Container>
        </Section>
    )
}));