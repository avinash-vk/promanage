import React from "react";
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Copy} from "react-feather";
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(() => ({
    root:{
        borderRadius:20,
        backgroundColor:"white",
        zIndex:2,
        boxShadow: "1px 2px 10px rgba(0,0,0,0.25)",
        padding:"5%"
    },
    child:{
        alignSelf:"center",
        marginTop:20
    },
    url:{
        marginTop:20,
        backgroundColor:"#F2F2F2",
        borderRadius:10,
        padding:'2%',
        fontSize:15
    }
}));
export default function Env(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <span style={{ color: 'black',textTransform:"capitalize",fontWeight:"bold",fontSize:15}}>Your environemt for Meraki</span>
           <div className={classes.child}><DataTable/></div> 
            <div className={classes.url}>
                <span>
                <text>https://promanage.com/32545943/39489i5095/env</text>
                <IconButton aria-label="copy" style={{marginLeft:"auto"}} >
                <Copy color="#000" size={20} />
                </IconButton>
                </span>
            </div>
        </div>
    )
}

const columns = [
  { field: 'key', headerName: 'Key', width: 200 },
  { field: 'value', headerName: 'Value', width: 400 },
];

const rows = [
  { id: 1 },
  { id: 2},
  { id: 3 },
  { id: 4},
  { id: 5 },
];

function DataTable() {
  return (
    <div style={{ height: 400}}>
      <DataGrid rows={rows} columns={columns} pageSize={5}/>
    </div>
  );
}