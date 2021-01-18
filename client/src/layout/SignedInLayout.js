import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "../components/Sidebar";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    overflowY: "auto",
    display:"flex",
    flex:1,
    backgroundColor:"#FFF"
  },
  sidebar: {
    height: "100%",
    backgroundColor:"#FFF"
  },
  fullHeight:{
    height:"100vh",
  }
}));

const SignedInLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.fullHeight}>
      <Grid item xs={0.5} className={classes.sidebar}>
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={11.5}
        className={classes.container}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SignedInLayout;