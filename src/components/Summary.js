import React from 'react';

let summary = `Driven full-stack software developer, familiar with a wide range of programming utilities and
languages. Knowledgeable of backend and frontend development requirements. Excellent
communication and organizational abilities with a resourceful approach to solving diverse
problems. Deadline-driven and knowledgeable professional with a strong desire to learn and
contribute to team success.`;

export default () => {
    return (
        <div className="container-fluid p-0" id="summary">
            <div className="jumbotron">
                <h4 className="heading">
                    Summary
            </h4>
                <p className="content">
                    {summary}
                </p>
            </div>

        </div>

    )
}