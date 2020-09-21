import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

let summary = `Driven full-stack software developer, familiar with a wide range of programming utilities and
languages. Knowledgeable of backend and frontend development requirements. Excellent
communication and organizational abilities with a resourceful approach to solving diverse
problems. Deadline-driven and knowledgeable professional with a strong desire to learn and
contribute to team success.`;

export default () => {
    const classes = useStyles();
    return (
        <Container className="summary">
            <div className="row">
                <div className="col-12 col-md-4 head">Summary</div>
                <div className="col-12 col-md-8">{summary}</div>

            </div>
        </Container>

    )
}