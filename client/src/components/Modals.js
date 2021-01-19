import React from 'react'
import { Modal, Avatar, Typography, TextField, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ColorButton } from './Button';

const modalStyles = makeStyles((theme)=>({
    root:{
        height: 620,
        width: 600,
        background: "#FFF",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        flexDirection:"column",
        outline:'none',
        padding:20
    },
    modal:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontFamily:"Poppins",
        fontWeight:500,
        fontSize:24
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottom:"2px solid #A7A7A7",
        width:"100%",
        paddingBottom:8
    },
    logo:{
        marginRight:12,
        height:60,
        width:60
    },
    content:{
        height:520,
        width:"100%",
        borderRadius:10,
        overflowY:"auto",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
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
        backgroundColor: "#E5E5E5",
        borderRadius: 8,
        padding: 10,
        width:580
    }
}))


export const GithubModal = ({open, handleClose}) => {
    const classes = modalStyles();
    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={classes.modal}
        >
            <div className={classes.root}>
                <div className={classes.header}>
                    <Avatar src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className={classes.logo} />
                    <Typography className={classes.text}>
                        Import from Github
                    </Typography>
                </div>
                <div className={classes.content} style={{backgroundColor:"#F4F4F4"}}>
                    This is not integrated yet.
                </div>
                <div className={classes.footer}>
                    <ColorButton variant="contained" color="primary" onClick={()=>{}} className={classes.button}>
                        Create
                    </ColorButton>
                </div>
            </div>
        </Modal>
    )
}

export const CreateProjectModal = ({open,handleClose}) => {
    const classes = modalStyles();
    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={classes.modal}
        >
            <div className={classes.root}>
                <div className={classes.header}>
                    <Typography className={classes.text}>
                        Start your project from scratch
                    </Typography>
                </div>
                <div className={classes.content}>
                    <form style={{width:"100%"}}>
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
                    </form>
                </div>
                <div className={classes.footer}>
                    <ColorButton variant="contained" color="primary" onClick={()=>{}} className={classes.button}>
                        Create
                    </ColorButton>
                </div>
            </div>
        </Modal>
    )
}
