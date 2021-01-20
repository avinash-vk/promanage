import React from 'react'
import { Grid, Typography, Avatar } from '@material-ui/core';
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
    },
    buttonContainer:{
        width:400,
        margin:8,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
        borderRadius:10,
        border:"2px solid black",
        "&:hover":{
            boxShadow: "0px 2px 2px #FF8400",
            cursor:"pointer"
        }
    },
    authLogo:{
        height:67,
        width:67,
        marginRight:8
    },
    buttonText:{
        fontFamily:"Poppins",
        fontWeight:100,
        fontSize:24
    }
}))

const AuthButton = ({logo,content,handleClick}) => {
    const classes = useStyles();
    return (
        <div className={classes.buttonContainer} onClick={handleClick}>
            <Avatar src={logo} className={classes.authLogo} />
            <Typography className={classes.buttonText}>
                {content}
            </Typography>
        </div>
    );
}

const SignIn = ({setAuth}) => {
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
                    <br />
                    <br />
                    <AuthButton 
                        logo="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                        content="Continue with Github"
                        handleClick={()=>setAuth(true)}
                    />
                    <Typography className={classes.text}>
                        or
                    </Typography>
                    <AuthButton 
                        logo="https://skipway.com/wp-content/uploads/2020/05/image-20150902-6700-t2axrz.jpg" 
                        content="Continue with Google"
                        handleClick={()=>setAuth(true)}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default SignIn;
