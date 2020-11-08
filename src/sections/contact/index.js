import React, { memo } from "react";
import "./index.scss";
import Section from "../../components/section";
import { Container, Card, Row, Col } from 'react-bootstrap';
import withScrollElement from '../../hoc/withScrollElement';
import Icon from "../../components/Icon";
import Fade from 'react-reveal/Fade';


export default withScrollElement(memo(function Contact({
    email = "asif5567@gmail.com",
    phone = "+1 (437) 992 9286",
    address = "Toronto, On"
}) {

    return (
        <Fade left distance="1.5rem">
            <Section className="contact_me" headingFirst="Contact" headingSecond="Me">
                <Container className="contact_wrapper p-0" fluid>
                    <address>
                        <Row className="mx-2 px-4">
                            <Col md={4}>
                                <Fade bottom distance="1.5rem" delay={800}>
                                    <Card className="contact_card mt-2 py-4 d-flex flex-row">
                                        <Icon className="contact_card_icon" fontSize="1.2rem" icon="fa-envelope" />
                                        <a className="contact_card_text" href={`mailto:${email}`}>{email}</a>
                                    </Card>
                                </Fade>
                            </Col>
                            <Col md={4}>
                                <Fade bottom distance="1.5rem" delay={1000}>
                                    <Card className="contact_card mt-2 py-4 d-flex flex-row">
                                        <Icon className="contact_card_icon" fontSize="1.2rem" icon="fa-mobile" />
                                        <a className="contact_card_text" href={`tel:${phone}`}>{phone}</a>
                                    </Card>
                                </Fade>
                            </Col>
                            <Col xs sm md={4}>
                                <Fade bottom distance="1.5rem" delay={1200}>
                                    <Card className="contact_card mt-2 py-4 d-flex flex-row">
                                        <Icon className="contact_card_icon" fontSize="1.2rem" icon="fa-home" />
                                        <a className="contact_card_text"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="http://maps.google.com/?q=toronto">{address}</a>
                                    </Card>
                                </Fade>
                            </Col>
                        </Row>
                    </address>
                </Container>
            </Section>
        </Fade>
    );
}));
