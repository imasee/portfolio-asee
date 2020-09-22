import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import React, { memo } from 'react';
import SocialMediaLinks from "./SocialMediaLinks";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    appBarSocial: {
        display: "flex",
        boxShadow: theme.shadows[6],
    },
    avatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        border: "1px solid white",
        boxShadow: theme.shadows[10]
    }
}));

export default memo(function () {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <SocialMediaLinks className={[classes.appBarSocial, "appbar-social"].join(" ")} />
            <Tooltip title="User">
                <Avatar classes={{ root: classes.avatar }} alt="Mohammed Asif" src="https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc" className={classes.small} />
            </Tooltip>
        </div>
    );
})