import React from 'react'
import { ArrowLeft } from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const headerStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#FFF",
        display:"inline-flex",
        padding: 8,
        alignItems:"center"
    },
    title: {
        fontSize: 28,
        fontFamily: "Poppins",
        fontWeight: 600,
    },
}))

export const Header = ({title}) => {
    const classes = headerStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <IconButton onClick={() => { history.goBack() }}>
                <ArrowLeft color="#000" size={36} strokeWidth="1" />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
                {title}
            </Typography>
        </div>
    )
}

