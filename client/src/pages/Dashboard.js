import React from 'react';
import ROUTES from '../routes';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  Toolbar,
  Grid
} from '@material-ui/core';
import SearchAppBar from '../components/Searchbar.js';
import ProjectCard from '../components/ProjectCard.js'
import { useHistory } from 'react-router-dom';

const ColorButton = withStyles(() => ({
  root: {
    color: 'white',
    backgroundColor: '#FF8400',
    '&:hover': {
      backgroundColor: '#FF8400',
      opacity:"0.8"
    },
  },
}))(Button);
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection:"row"
  },
  rootgrid: {
      flexGrow:1,
      justifyContent:'center',
      alignContent:'center'
  },
  button: {
    margin: theme.spacing(1),
    textTransform:"capitalize",
    borderRadius:100,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleStartProject = () => {
      history.push(ROUTES.createProject);
  }
  const data =[
    {
    },
    {
    },
    {
    },
    {}
  ]
  return (
    <div className={classes.root}>
          <Toolbar>
              <div style={{width:'50%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          TabIndicatorProps={{
            style: {
              background:'#FF8400',
            }
          }}
        >
          <Tab label={<span style={{ color: (value==0)?'black':'grey',textTransform:"capitalize",fontWeight:"bold",fontSize:20 }}>Projects</span>} {...a11yProps(0)} />
          <Tab label={<span style={{ color: (value==1)?'black':'grey',textTransform:"capitalize",fontWeight:"bold",fontSize:20  }}>Boards</span>} {...a11yProps(1)} />
        </Tabs>
        </div>
        <div style = {{display:"flex",flexDirection:"row",marginLeft:"auto"}}>
           <SearchAppBar />
            <ColorButton variant="contained" color="primary"  onClick={handleStartProject} className={classes.button}>
                Start a project
            </ColorButton>
        </div>
      </Toolbar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className={classes.rootgrid}>
        <Grid container spacing={3}>
          {data.map((value) => ( 
            <Grid item xs><ProjectCard/></Grid>
          ))}
        </Grid>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Blah2
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
