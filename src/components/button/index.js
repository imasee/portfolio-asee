import React, { memo } from 'react';
import './index.scss';

export default memo(function ({ children, type, handleClick, className }) {
    return (<button
        type={type}
        className={["btn_cstm bg-slide-in", className].join(" ")}
        onClick={handleClick}
    >
        {children}
    </button>)
});