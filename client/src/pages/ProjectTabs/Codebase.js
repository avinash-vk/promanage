import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {ReactComponent as Upload} from '../../assets/Upload.svg'
import { ColorButton } from '../../components/Button.js';
import Input from '@material-ui/core/Input';
import {Search} from 'react-feather';
import TechCard from '../../components/TechCard.js'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop:20
  },
  starter:{
      textAlign:"center",
      alignItems:"center",
      justifyContent:"center",
      display:"flex",
      marginTop:40
  },
  playground:{
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    display:"flex",
  },
  button: {
    margin: theme.spacing(1),
    textTransform:"capitalize",
    borderRadius:100,
  },
}));

export default function Codebase() {
  const classes = useStyles();
  const data =[{
      name:"Firebase",
      desc:"Cloud services from Google",
      url:"https://img.icons8.com/color/32/000000/firebase.png"
  },{
    name:"React",
    desc:"Frontend developement from Facebook",
    url:"https://img.icons8.com/officel/32/000000/react.png"
  },{
    name:"Github + Git",
    desc:"A version control application",
    url:"https://img.icons8.com/fluent/32/000000/github.png"
  },{
    name:"MongoDb",
    desc:"A NoSql cloud database service",
    url:"https://img.icons8.com/color/32/000000/mongodb.png"
  }]
  const handleUpload = () => {
}
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} className={classes.starter}>
            <Grid item xs={10} sm={5}>
            Select your tech stack from the right and create a good starter for your brand new project.
            <br/><br/>
            or
            <br/><br/>
            Upload your code files.
            <br/>
                        <div style={{verticalAlign:"center"}}>
                        <Upload width="60%"/>
                        <ColorButton variant="contained" color="primary"  onClick={handleUpload} className={classes.button}>
                        Upload
                        </ColorButton>
                        </div>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={4} className="playground">
         <Paper className={classes.paper}>
             Playground
             <br></br>
             <div style={{borderRadius:20,backgroundColor:"#F5F5F5",marginTop:5,padding:2}}>
             <Grid container spacing={1} >
          <Grid item sm={1}>
          <Search color="grey" size={20}/>
          </Grid>
          <Grid item sm={11}>
          <Input style={{fontSize:15}} placeholder="Search for your tech stacks" inputProps={{ 'aria-label': 'description' }} fullWidth="true" />      
          </Grid>
        </Grid>
             </div>
             <Grid container spacing={3} style={{marginTop:10}}>
          {data.map((value) => ( 
            <Grid item sm={12}>
                <TechCard name={value.name} desc={value.desc} url={value.url}/>
            </Grid>
          ))}
        </Grid>
         </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
