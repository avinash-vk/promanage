import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import SearchAppBar from '../components/Searchbar.js';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '..//components/ProjectCard.js'
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleStartProject = () => {
      alert("Wehoooo");
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
          <Tab label={<span style={{ color: (value==0)?'black':'grey',textTransform:"capitalize",fontWeight:"bold" }}>Projects</span>} {...a11yProps(0)} />
          <Tab label={<span style={{ color: (value==1)?'black':'grey',textTransform:"capitalize",fontWeight:"bold" }}>Boards</span>} {...a11yProps(1)} />
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
