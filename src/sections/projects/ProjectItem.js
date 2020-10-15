import React, { useState, memo } from 'react';
import { ButtonMore } from '../../sections/resume/time-line-components';
import Icon from '../../components/Icon';
import Zoom from 'react-reveal/Zoom';

export default memo(function ({ data, delay }) {

    const [isShowDetails, setShowDetails] = useState(false);

    function handleToggleShowDetails() {
        setShowDetails(prev => (!prev))
    }

    return (
        <Zoom delay={delay}>
            <div className="projects_item shadow">
                <div className="projects_item_header">
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
                        title={isShowDetails ? "Less" : "More Details"}
                        text={isShowDetails ? <Icon icon="fa-ellipsis-v" fontSize=".8rem" /> : <Icon icon="fa-ellipsis-h" fontSize=".8rem" />}
                        handleClick={handleToggleShowDetails}
                    />
                </div>
            </div>
        </Zoom>)
});