import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import {Plus} from "react-feather";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    dispaly:"flex",
    verticalAlign:"center"
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function TechCard(props) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Grid container spacing={1}>
        <Grid sm={2}>
          <Avatar
            src={props.url}
            className={classes.small}
          />
        </Grid>
        <Grid sm={8}>{props.name}
        <br></br>
        <p style={{fontSize:10}}>{props.desc}</p>
        </Grid>
        <Grid sm={2}>
          <IconButton aria-label="add"><Plus/></IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
