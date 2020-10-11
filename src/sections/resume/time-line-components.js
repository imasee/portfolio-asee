import React from "react";
import ToolTip from '../../components/Tooltip';


export const EdDuration = React.memo(({ from, to }) => (
    <div className="ed_duration">
        <span className="ed_duration_from">{from}</span>
        {(from && to) ? <span className="ed_duration_seperator">-</span> : ""}
        <span className="ed_duration_to">{to}</span>
    </div>
));

export const EdTitle = React.memo(({ institution, location, src }) => (
    <div className="ed_title d-flex">
        <div className="ed_title_logo">
            {src && <img className="ed_title_logo_img mr-1" alt={`logo`} src={src} height="40px" width="40px" />}
        </div>
        <div className="ed_title_content">
            <span className="ed_title_content_institution">{institution}</span>
            <span className="ed_title_content_location">{location}</span>
        </div>
    </div>
));

export const EdSubheading = React.memo(({ main, sec }) => (
    <div className="ed_sub">
        <span className="ed_sub_main">
            {main}
        </span>
        <span className="ed_sub_sec">
            {sec}
        </span>
    </div>
));

export const ButtonMore = React.memo(({ text = "mybutton", title, className, handleClick }) => (
    <ToolTip title={title}>
        <div className="btn_more">
            <button onClick={handleClick}
                variant="default"
                className={["btn ", className].join(" ")}
                type="button">
                {text}
            </button>
        </div>
    </ToolTip>
));