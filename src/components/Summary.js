import React from 'react';


let summary = `Driven full-stack software developer, familiar with a wide range of programming utilities and
languages. Knowledgeable of backend and frontend development requirements. Excellent
communication and organizational abilities with a resourceful approach to solving diverse
problems. Deadline-driven and knowledgeable professional with a strong desire to learn and
contribute to team success.`;

export default () => {
    return (
        <div className="summary m-0 p-0">
            <div className="row d-flex flex-md-row-reverse p-5">
                {/* <div className="vector col-12 col-md-4">
                    <div className="mr-auto mx-md-auto ml-3" style={{ backgroundImage: "url('/svg-assets/summary.svg')" }} />
                </div> */}
                <div className="col-12 col-md-12 head">
                    <p className="header col"> Summary</p>

                    <p className="content col-12">
                        {summary}
                    </p>
                </div>


            </div>
        </div>

    )
}