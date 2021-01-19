import React from 'react'
import { Header } from "../components/Header";
import ActionButton from "../components/ActionButton";
import { Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useCreateProjectStyles = makeStyles(()=>({
    root:{
        display:"flex",
        flexGrow:1,
        flexDirection:"column"
    },
    contentContainer:{
        display:"flex",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    content:{
        display:"flex",
        flexDirection:"row"
    },
    text:{
        fontFamily:"Poppins",
        fontWeight:500,
        fontSize:20
    },
    logo: {
        height:67,
        width:67,
        marginRight:8
    }
}))
const CreateProject = () => {
    const classes = useCreateProjectStyles();
    return (
        <div className={classes.root}>
            <Header title="Create a project" />
            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    <ActionButton>
                        <Avatar src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className={classes.logo} />
                        <Typography className={classes.text}>
                            Import from Github
                        </Typography>
                    </ActionButton>
                    <ActionButton>
                        <Typography className={classes.text}>
                            Start from scratch
                        </Typography>
                    </ActionButton>
                </div>
            </div>
        </div>
    )
}

export default CreateProject
