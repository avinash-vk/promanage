import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Select, MenuItem } from '@material-ui/core';

const projectTabStyles = makeStyles((theme)=>({
    contentContainer:{
        display:"flex",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontFamily:"Poppins",
        fontWeight:400,
        fontSize:18,
        color:'#FF8400'
    },
    root:{
        height: "80%",
        width: "80%",
        background: "#FFF",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        flexDirection:"column",
        outline:'none',
        padding:20,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    content:{
        width:"100%",
        borderRadius:10,
        overflowY:"auto",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFF'
    },
    button:{
        margin: theme.spacing(1),
        textTransform:"capitalize",
        borderRadius:100,
        paddingLeft:30,
        paddingRight:30
    },
    inputContainer:{
        marginBottom:40,
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
    },
    input:{
        fontFamily: "Poppins",
        backgroundColor: "#F5F5F5",
        borderRadius: 8,
        padding: 10,
    }
}));

const ProjectTab = () => {
    const classes = projectTabStyles();
    const [status, setStatus] = React.useState(0);

    return (
        <div className={classes.contentContainer}>
                <div className={classes.root}>
                    <div className={classes.content}>
                        <form style={{width:"95%"}}>
                            <div className={classes.inputContainer}>
                                <Typography className={classes.text}>
                                    Title
                                </Typography>
                                <TextField 
                                    fullWidth
                                    InputProps={{disableUnderline: true}}
                                    className={classes.input} 
                                />
                            </div>
                            <div className={classes.inputContainer}>
                                <Typography className={classes.text}>
                                    Description
                                </Typography>
                                <TextField 
                                    fullWidth
                                    multiline 
                                    rows={8} 
                                    InputProps={{disableUnderline: true}}
                                    className={classes.input} 
                                />
                            </div>
                            <div style = {{ marginBottom:20}} >
                                <Typography className={classes.text} style={{display:"inline-flex"}}>
                                    Status
                                </Typography>
                                <Select
                                    labelId="status"
                                    id="status-select"
                                    value={status}
                                    onChange={(e) => {
                                        console.log(status)
                                        setStatus(e.target.value)
                                    }}
                                    disableUnderline
                                    style={{marginLeft:16}}
                                >
                                    <MenuItem key = {"In Progress"} value={0}>
                                        <Typography style={{
                                            backgroundColor:"#FF9696",
                                            color:"#FFF",
                                            borderRadius:100,
                                            padding:4,
                                            paddingLeft:12,
                                            paddingRight:12
                                        }}>
                                            In Progress
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem key = {"Idea"} value={1}>
                                        <Typography style={{
                                            backgroundColor:"#26C8FB",
                                            color:"#FFF",
                                            borderRadius:100,
                                            padding:4,
                                            paddingLeft:12,
                                            paddingRight:12
                                        }}>
                                            Idea
                                        </Typography>
                                    </MenuItem><MenuItem key = {"Done"} value={2}>
                                        <Typography style={{
                                            backgroundColor:"#0FF418",
                                            color:"#FFF",
                                            borderRadius:100,
                                            padding:4,
                                            paddingLeft:12,
                                            paddingRight:12
                                        }}>
                                            Done
                                        </Typography>
                                    </MenuItem>
                                </Select>
                            </div>  
                            <div className={classes.inputContainer}>
                                <Typography className={classes.text}>
                                    Collaborators
                                </Typography>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default ProjectTab
