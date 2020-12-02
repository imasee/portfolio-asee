import React, { memo, useState, useCallback } from 'react';
import "./index.scss";
import { Container } from 'react-bootstrap';
import Section from "../../components/section";
import ProjectItem from './ProjectItem';
import withScrollElement from '../../hoc/withScrollElement';
import ProjectDetail from './ProjectDetail';


export default memo(withScrollElement(function ({ data = [] }) {

    const [projectData, setData] = useState();

    const handleToggleDetailShow = useCallback((data) => {
        if (data && data !== null) {
            setData(data);
        }
        else {
            setData(undefined);
        }
    }, [setData]);

    return (
        <Section className="my_projects" headingFirst="My" headingSecond="Projects">
            <Container className="projects_wrapper p-0" fluid>
                <ProjectDetail show={projectData !== undefined && projectData !== null} data={projectData} handleToggleDetailShow={handleToggleDetailShow} />
                {data.map((project, i) => (
                    <ProjectItem
                        data={project}
                        key={i}
                        delay={(i + 1) * 100}
                        handleToggleDetailShow={handleToggleDetailShow} />))}
            </Container>
        </Section>
    )
}));