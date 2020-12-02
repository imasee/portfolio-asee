import React, { memo } from 'react';
import { ButtonMore } from '../../sections/resume/time-line-components';
import Icon from '../../components/Icon';
import Zoom from 'react-reveal/Zoom';
import { Badge } from 'react-bootstrap';

export default memo(function ({ data, delay, handleToggleDetailShow }) {

    function handleExpandProject() {
        handleToggleDetailShow(data);
    }

    return (
        <Zoom delay={delay}>
            <div className="projects_item shadow">
                <div className="projects_item_header">
                    {data && data.duration && < Badge className="projects_item_header_duration shadow" pill>
                        {data.duration.from && data.duration.from.month && data.duration.from.year && <span>
                            {data.duration.from.month.substr(0, 3)}&nbsp;
                            {data.duration.from.year}
                        </span>}<span>{" "}-{" "}</span>
                        {data.duration.to && data.duration.to.month && data.duration.to.year ? <span>
                            {data.duration.to.month.substr(0, 3)}&nbsp;
                            {data.duration.to.year}
                        </span> : "Present"}
                    </Badge>}
                    <img
                        src={data && data.imageUrl}
                        width="200px"
                        alt="Project banner"
                    />
                </div>
                <div className="projects_item_content">
                    <div className="projects_item_content_heading">{data && data.title}</div>
                    <div className="projects_item_content_detail">
                        {data && data.type}
                    </div>
                    <ButtonMore
                        className="btn-circle shadow-sm projects_item_content_btn"
                        title="More Details"
                        text={<Icon icon="fa-ellipsis-h" fontSize=".8rem" />}
                        handleClick={handleExpandProject}
                    />
                </div>
            </div>
        </Zoom >)
});