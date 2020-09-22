import React from "react";

export default function ({ children }) {
    return (
        <div className="landing-background">
            <div className="landing-background-left" />
            <div className="landing-background-content">
                {children}
            </div>
        </div>
    )
}
