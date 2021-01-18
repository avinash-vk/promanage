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
    backgroundColor:"#F5F5F5"
  },
  sidebar: {
    width:100,
    height: "100%",
    overflow: "hidden",
    position:"fixed"
  },
  fullHeight:{
    height:"100vh",
    overflow: "hidden"
  }
}));

const SignedInLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.fullHeight}>
      <Sidebar />
      <Grid
        item
        className={classes.container}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SignedInLayout;