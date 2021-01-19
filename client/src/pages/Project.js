import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../components/Header';
import { Tabs, Tab, Typography } from '@material-ui/core';

const useProjectStyles = makeStyles(()=>({
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
    },
    tabs:{
        backgroundColor:"#FFF",
        paddingLeft:36
    }
}))

const useTabItemStyles = makeStyles(() => ({
    root: {
        textTransform:"capitalize", 
        fontFamily:"Poppins",
        fontWeight:600,
        width:150,
        fontSize:24,
        color: '#C4C4C4',
        '&$selected': {
            color: '#FF8400',
        },
    },
    selected:{},
    wrapper:{}
  }));

const Project = () => {
    const classes = useProjectStyles();
    const [index, setIndex] = React.useState(0);
    const tabItemStyles = useTabItemStyles();
    const handleTabChange = (e,newIndex) => setIndex(newIndex);

    return (
        <div className={classes.root} >
            <Header title="Project title" />
            <Tabs
                value={index}
                onChange={handleTabChange}
                aria-label="Project-tabs"
                className={classes.tabs}
                indicatorColor="transparent"
            >
                <Tab label="Project" classes={tabItemStyles} disableRipple={true}/>
                <Tab label="Codebase" classes={tabItemStyles} disableRipple={true} />
                <Tab label="Board" classes={tabItemStyles} disableRipple={true} />
                <Tab label="Environment" classes={tabItemStyles} disableRipple={true} />
            </Tabs>
        </div>
    )
}

export default Project
