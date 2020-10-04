import React from 'react';
import Section from '../section/Section';
import Skill from '../skill/Skill';
import SkillDetails from './SkillDetails';
import Divider from '@material-ui/core/Divider';

export default function () {
    return (
        <Section heading="skills">
            <div className="px-0 py-3">
                <div className="row mb-2">
                    <div className="col-12 col-sm-4 col-md-4 ml-auto">
                        <Skill heading="Front End" percentage={85} />
                    </div>
                    <div className="col-12 col-sm-4 col-md-4">
                        <Skill heading="Back End" percentage={85} />
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 mr-auto">
                        <Skill heading="Other" percentage={75} />
                    </div>
                </div>
                <Divider />
                <div className="row mt-3">
                    <div className="col">
                        <SkillDetails />
                    </div>
                </div>
            </div>


        </Section>
    )
}