import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
    primary: {
        fontSize: "1.3rem"
    },
    secondary: {
        fontSize: "1rem"
    }
}));


export default function ({ icon, heading, content }) {
    const classes = useStyles();
    return (
        <ListItem alignItems="flex-start" className="skill-detail-item">
            <ListItemAvatar className="skill-detail-item-icon">
                {icon ? icon : <Avatar alt="no icon">S</Avatar>}
            </ListItemAvatar>
            <ListItemText
                className="skill-detail-item-head pl-3"
                primary={heading}
                classes={{ primary: classes.primary, secondary: classes.secondary }}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={[classes.inline, "skill-detail-item-content"].join(" ")}
                        >
                            {content}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}