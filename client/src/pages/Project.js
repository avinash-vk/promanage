import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../components/Header';
import { Tabs, Tab, Typography } from '@material-ui/core';

// Tabs
import ProjectTab from './ProjectTabs/ProjectTab'; 
import Codebase from './ProjectTabs/Codebase';
import Env from './ProjectTabs/Env';
import Board from './ProjectTabs/Board';

const useProjectStyles = makeStyles(()=>({
    root:{
        display:"flex",
        flexGrow:1,
        flexDirection:"column"
    },    
    tabs:{
        backgroundColor:"#FFF",
        paddingLeft:36
    }
}))

const useTabStyles = makeStyles(() => ({
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

const RenderComponent = ({index}) => {
    let component;
    if(index === 0) component = <ProjectTab />;
    else if(index === 1) component = <Codebase />;
    else if(index === 2) component = <Board />;
    else component = <Env />;

    return (
        <>{component}</>
    )
}

const Project = () => {
    const classes = useProjectStyles();
    const [index, setIndex] = React.useState(0);
    const tabStyles = useTabStyles();
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
                <Tab label="Project" classes={tabStyles} disableRipple={true}/>
                <Tab label="Codebase" classes={tabStyles} disableRipple={true} />
                <Tab label="Board" classes={tabStyles} disableRipple={true} />
                <Tab label="Environment" classes={tabStyles} disableRipple={true} />
            </Tabs>
            <RenderComponent index= {index} />
        </div>
    )
}

export default Project
