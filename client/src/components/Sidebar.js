import React from 'react';
import { Box, List, ListItem, Avatar } from '@material-ui/core';
import logo from '../assets/logo.png';
import { makeStyles } from "@material-ui/core/styles";
import { Home, Info, Settings, LogOut } from 'react-feather';

const Logo = () => {
    return (
        <Box justifyContent="center" alignItems="center" display="flex">
            <img src={logo} width="56px" alt="Promanage" />
        </Box>
    )
}

const sidebarStyles = makeStyles(() => ({
    root: {
        display:"flex",
        color: "#FFF",
        transition: "850ms",
        height: "100%",
    }
}))

const Sidebar = () => {
    const classes = sidebarStyles();
    return (
        <div className = {classes.root}>
            <List style = {{ height:"100%" }}>
                <Logo />
                <ListItem>
                    <Home color="#000" size={36} />
                </ListItem>
                <ListItem>
                    <Info color="#000" size={36} />
                </ListItem>
                <ListItem>
                    <Settings color="#000" size={36} />
                </ListItem>
                <ListItem>
                    <Avatar src="https://images.unsplash.com/photo-1610767540785-96b4c65de306" alt="You" />
                </ListItem>
                <ListItem>
                    <LogOut color="#FF8400" size={36} />
                </ListItem>
            </List>
        </div>
    )
}

export default Sidebar
