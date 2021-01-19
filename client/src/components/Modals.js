import React from 'react'
import { Modal, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const modalStyles = makeStyles(()=>({
    root:{
        height: 620,
        width: 600,
        background: "#FFF",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        flexDirection:"column",
        outline:'none',
    },
    modal:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
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
        padding:20
    },
    logo:{
        marginRight:12,
        height:60,
        width:60
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
