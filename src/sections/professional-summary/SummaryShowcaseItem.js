import React, { memo } from 'react';
import Icon from '../../components/Icon';
import Zoom from 'react-reveal/Zoom';

export default memo(function ({ icon, title, delay }) {
    return (
        <Zoom delay={delay}>
            <div className="summary_showcase_item shadow">
                <Icon className="summary_showcase_item_icon" icon={icon} />
                <p className="summary_showcase_item_title">{title}</p>
            </div>
        </Zoom>)
});