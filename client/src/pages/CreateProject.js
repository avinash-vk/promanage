import React from 'react'
import { Header } from "../components/Header";
import ActionButton from "../components/ActionButton";
import { Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GithubModal, CreateProjectModal } from '../components/Modals';

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
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
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
    const [modal, setModal] = React.useState(0);

    const handleClose = () => setModal(0);

    return (
        <div className={classes.root}>
            <Header title="Create a project" />
            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    <ActionButton handleClick={()=>{setModal(1)}}>
                        <Avatar src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className={classes.logo} />
                        <Typography className={classes.text}>
                            Import from Github
                        </Typography>
                    </ActionButton>
                    <Typography className={classes.text}>
                        or
                    </Typography>
                    <ActionButton handleClick={()=>{setModal(2)}}>
                        <Typography className={classes.text}>
                            Start from scratch
                        </Typography>
                    </ActionButton>
                    <GithubModal handleClose={handleClose} open={modal===1} />
                    <CreateProjectModal handleClose={handleClose} open={modal===2} />
                </div>
            </div>
        </div>
    )
}

export default CreateProject
