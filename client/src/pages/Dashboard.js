import React from 'react';
import ROUTES from '../routes';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Tabs,Tab,Box,Typography,Toolbar,Grid} from '@material-ui/core';
import SearchAppBar from '../components/Searchbar.js';
import ProjectCard from '../components/ProjectCard.js'
import { useHistory } from 'react-router-dom';
import { ColorButton } from '../components/Button.js';
import Env from '../components/Env'
const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection:"row"
  },
  toolbar:{
    backgroundColor:"white",
  },
  rootgrid: {
      flexGrow:1,
      justifyContent:'center',
      alignContent:'center',
      padding:20
  },
  button: {
    margin: theme.spacing(1),
    textTransform:"capitalize",
    borderRadius:100,
  },
  tabs:{
    backgroundColor:"#FFF",
}
}));
const useTabStyles = makeStyles(() => ({
  root: {
      textTransform:"capitalize", 
      fontFamily:"Poppins",
      fontWeight:600,
      width:150,
      fontSize:24,
      color: '#C4C4C4',
      '&$selected': {
          color: 'black',
      },
  },
  selected:{},
  wrapper:{}
}));
const data =[
  {
  },
  {
  },
  {
  },
  {}
]
const ProjectDisplay = () => {
  const classes = useStyles();
  return(
    <div className={classes.rootgrid}>
        <Grid container spacing={3}>
          {data.map((value) => ( 
            <Grid item xs><ProjectCard/></Grid>
          ))}
        </Grid>
        </div>
  )
}
const RenderComponent = ({value}) => {
  let component;
  if(value === 0) component = <ProjectDisplay />;
  else component = <Env />;
  return (
      <>{component}</>
  )
}
export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const tabStyles = useTabStyles();
  const handleTabChange = (e,newValue) =>setValue(newValue);
  const handleStartProject = () => {
      history.push(ROUTES.createProject);
  }
  return (
    <div className={classes.root}>
        <Toolbar className={classes.toolbar}>
              <div>
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="Dashboard-tabs"
          className={classes.tabs}
          TabIndicatorProps={{
            style: {
              background:'transparent',
            }
          }}
        >
          <Tab label="Projects" classes={tabStyles} />
          <Tab label="Boards" classes={tabStyles} />
        </Tabs>
        </div>
        <div style = {{display:"flex",flexDirection:"row",marginLeft:"auto"}}>
           <SearchAppBar />
            <ColorButton variant="contained" color="primary"  onClick={handleStartProject} className={classes.button}>
                Start a project
            </ColorButton>
        </div>
      </Toolbar>
      <RenderComponent value={value} />
    </div>
  );
}
