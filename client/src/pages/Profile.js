import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Header} from '../components/Header';
import { Typography, Grid, TextField, IconButton } from '@material-ui/core';
import { AuthContext } from '../firebase/provider';
import {Copy} from "react-feather";
const useStyles = makeStyles(()=>({
    root:{
        display:"flex",
        flexGrow:1,
        flexDirection:"column"
    },
    container:{
        padding:"6%"
    },
    headerText:{
        fontSize:32,
        fontFamily:"Poppins",
        fontWeight:800
    },
    inputContainer:{
        marginBottom:40,
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
    },
    input:{
        fontFamily: "Poppins",
        backgroundColor: "#E5E5E5",
        borderRadius: 8,
        padding: 10,
        width:580
    },
    text:{
        fontFamily:"Poppins",
        fontWeight:500,
        fontSize:16
    },
    url:{
        backgroundColor:"#E5E5E5",
        borderRadius:10,
        padding:'1%',
        paddingLeft:"4%",
        fontSize:15,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        fontFamily:"Poppins",
    }, 
    buttons:{
        marginLeft:"auto"
      }
}))

const Profile = () => {
    const classes = useStyles();
    const { user } = React.useContext(AuthContext);
    const [ isCopy, setIsCopy ] = React.useState(false);
    const handleCopy = (e) => {
        navigator.clipboard.writeText(user.uid);
        setIsCopy(true);
        setTimeout(()=>{setIsCopy(false)},5000);
    }
      
    return (
        <div className={classes.root}>
            <Header title="Profile" />
            <div className={classes.container} >
                <Grid container direction="row">
                    <Grid item xs={8}>
                        <Typography className={classes.headerText}>Hey {user.displayName}, you're Awesome.</Typography>
                        <br />
                        Here are some stats and details we have of yours, which we assumed you'd like customizing.
                        <br />
                        <br />
                        <br />
                        <div className={classes.formContainer}>
                            <div className={classes.inputContainer}>
                                <Typography className={classes.text}>
                                    Display name
                                </Typography>
                                <TextField 
                                    fullWidth
                                    InputProps={{disableUnderline: true}}
                                    className={classes.input} 
                                    value={user.displayName}
                                />
                            </div>
                            <div className={classes.inputContainer}>
                                <Typography className={classes.text}>
                                    Bio
                                </Typography>
                                <TextField 
                                    fullWidth
                                    InputProps={{disableUnderline: true}}
                                    className={classes.input} 
                                    multiline 
                                    rows={4} 
                                />
                            </div>
                        </div>
                        <br />
                        Here are your user credentials to use the promanage-cli:
                        <div className={classes.url}>
                            <text>{isCopy?"Copied!":"Click copy to copy your user creds"}</text>
                            <div className={classes.buttons}>
                                <IconButton aria-label="copy" onClick={handleCopy}>
                                    <Copy color="#000" size={20} />
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} align="center">
                        <img src={user.photoURL} alt="profile-photo" height={300} width={300} style={{borderRadius:300}}/>
                    </Grid>
                </Grid>
                
            </div>
        </div>
    )
}

export default Profile
