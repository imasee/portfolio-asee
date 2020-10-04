import React from 'react';
import Section from './section/Section';


let summary = `Driven full-stack software developer, familiar with a wide range of programming utilities and
languages. Knowledgeable of backend and frontend development requirements. Excellent
communication and organizational abilities with a resourceful approach to solving diverse
problems. Deadline-driven and knowledgeable professional with a strong desire to learn and
contribute to team success.`;

export default () => {
    return (
        <Section heading="summary">
            <p className="content text-left py-3">
                {summary}
            </p>
            <img src="/svg-assets/summary.svg" alt="Summary background" className="summary-bg" />
        </Section>
    )
}