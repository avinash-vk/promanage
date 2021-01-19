import React from 'react'
import { Modal, Avatar, Typography } from '@material-ui/core';
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
    },
    logo:{
        marginRight:12,
        height:60,
        width:60
    },
    content:{
        height:520,
        width:"100%",
        backgroundColor:"#F4F4F4",
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
                <div className={classes.content}>
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
            <div className={classes.root} >
            </div>
        </Modal>
    )
}
