import React from "react";


export const EdDuration = React.memo(({ from, to }) => (
    <div className="ed_duration">
        <span className="ed_duration_from">{from}</span>
        {(from && to) ? <span className="ed_duration_seperator">-</span> : ""}
        <span className="ed_duration_to">{to}</span>
    </div>
));

export const EdTitle = React.memo(({ institution, location }) => (
    <div className="ed_title">
        <span className="ed_title_institution">{institution}</span>
        <span className="ed_title_location">{location}</span>
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