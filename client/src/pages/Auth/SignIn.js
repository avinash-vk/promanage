import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const useStyles = makeStyles(()=>({
    container: {
        height: "100%",
        backgroundColor:"#FFF",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    },
    parent:{
        height: "100%",
        overflowY: "auto",
        display:"flex",
        flex:1,
    },
    root:{
        height:"100vh",
        overflow: "hidden"
    },
    logo:{
        height:"100%",
        width:"100%",
        position:"absolute",
        left:"-30%"
    },
    header: {
        fontFamily:"Poppins",
        fontWeight:600,
        fontSize:48
    },
    orangeText: {
        color:"#FF8400"
    },
    text:{
        fontFamily:"Poppins",
        fontWeight:200,
        fontSize:18,
        color:"rgba(0,0,0,0.5)"
    }
}))

const SignIn = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="row" className={classes.parent}>
                <Grid item xs={6} className={classes.container}>
                    <Logo className={classes.logo} />
                </Grid>
                <Grid item xs={6} className={classes.container} >
                    <Typography variant="h2" className={classes.header}>
                        Log In to <span className={classes.orangeText}>Promanage</span>.
                    </Typography>
                    <br />
                    <Typography className={classes.text}>
                        A single workspace to manage all your projects
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignIn;
