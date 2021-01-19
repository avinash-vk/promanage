import React from 'react'
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(()=>({
    root: {
        height:100,
        width:375,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        border:"1px solid transparent",
        margin:20,
        '&:hover':{
            cursor:'pointer',
            border:"1px solid #FF8400"
        }
    }
}))

const ActionButton = ({children,handleClick}) => {
    const classes = useStyles();
    return (
        <Card 
            className={classes.root}
            onClick={handleClick}
        >
            {children}
        </Card>
    )
}

export default ActionButton;