import React, { Fragment, memo, useCallback } from 'react';
import {
    Badge,
    Button, Image, ListGroup, ListGroupItem, Modal
} from 'react-bootstrap';
import "./project-detail.scss";

export default memo(function ({ show, handleToggleDetailShow, data }) {

    const handleClose = useCallback(() => {
        handleToggleDetailShow(undefined);
    }, [handleToggleDetailShow]);

    return (
        <Fragment>
            <Modal
                centered
                className="project_detail rounded"
                size="lg"
                show={show}
                onHide={handleClose}
                aria-labelledby="project-detail-modal"
            >
                <div className="project_detail_header">
                    <div className="project_detail_header_content">
                        <div className="w-100 d-flex flex-row align-items-center">
                            <div className="project_detail_header_content_title">{data && data.title}</div>
                            <Button variant="danger" className="shadow" onClick={handleClose}>Close</Button>
                        </div>
                        <div className="project_detail_header_content_type">{data && data.type}</div>
                        <div className="w-100 d-flex flex-column flex-md-row">
                            <div className="project_detail_header_content_location">{data && data.location}</div>
                            {data && data.duration && <div className="project_detail_header_content_duration">
                                {data.duration.from && data.duration.from.month && data.duration.from.year && <span>
                                    {data.duration.from.month.substr(0, 3)}&nbsp;
                            {data.duration.from.year}
                                </span>}<span>{" "}-{" "}</span>
                                {data.duration.to && data.duration.to.month && data.duration.to.year ? <span>
                                    {data.duration.to.month.substr(0, 3)}&nbsp;
                            {data.duration.to.year}
                                </span> : "Present"}
                            </div>}
                        </div>
                    </div>
                    {data && data.imageUrl && <Image src={data.imageUrl}
                        className="project_detail_header_img"
                        width="100%"
                    />}
                </div>
                <div className="project_detail_content">
                    <div className="project_detail_content_main_tech">
                        <div className="project_detail_content_main_tech_header pt-1">
                            Main technologies
                        </div>

                        < div className="project_detail_content_main_tech_content">
                            {data && data.mainTechnologies.map((tech, i) => {
                                return <Badge className="project_detail_content_main_tech_content_tech" key={Math.random() + i} pill>{tech.title}</Badge>
                            })}
                        </div>
                    </div>
                    <div className="project_detail_content_description">
                        <div className="project_detail_content_description_header pt-3">
                            Description
                        </div>
                        <ListGroup >
                            {data && data.details && data.details.map((det, i) => (
                                <ListGroupItem key={i}>
                                    {det}
                                </ListGroupItem>))}
                        </ListGroup>
                    </div>

                </div>
            </Modal>
        </Fragment >
    )
});