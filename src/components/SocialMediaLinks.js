import React from "react";
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  iconButton: {
    padding: theme.spacing(.5),
    margin: "auto",
    '&:active,&:focus ': {
      outline: "none"
    }
  }
}));

export default ({ className }) => {
  const classes = useStyles();
  return (
    <div className={[className, "social"].join(" ")}>
      <IconButton className={[classes.iconButton, "mr-1"].join(" ")}>
        <i className="fa fa-facebook-official dim "></i>
      </IconButton>
      <IconButton className={[classes.iconButton, "mr-1"].join(" ")}>
        <i className="fa fa-instagram dim"></i>
      </IconButton>
      <IconButton className={[classes.iconButton, "mr-1"].join(" ")}>
        <i className="fa fa-linkedin dim"></i>
      </IconButton>

    </div>
  );
};
