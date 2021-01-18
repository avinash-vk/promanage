import React from 'react';
import { Box, List, ListItem, Avatar } from '@material-ui/core';
import logo from '../assets/logo.png';
import { makeStyles } from "@material-ui/core/styles";
import { Home, Info, Settings, LogOut } from 'react-feather';
import { useHistory } from 'react-router-dom';

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
    },
    listItem: {
        marginTop:12,
        "&:hover":{
            cursor:"pointer",
        },
        flexDirection:"column"
    },
    listItemBottom:{
        "&:hover":{
            cursor:"pointer",
        },
        position:"absolute",
        bottom:40
    },
    extraMargin:{
        marginTop:24
    }
}))

const Indicator = ({active}) => {
    return (
        <div style = {{
            minHeight:8,
            minWidth:8,
            backgroundColor:active?"#FF8400":"transparent",
            borderRadius:100,
            margin:2
        }}
        />
    )
}

const Sidebar = () => {
    const classes = sidebarStyles();
    const [index, setIndex] = React.useState(0);
    const history = useHistory();

    return (
        <div className = {classes.root}>
            <List style = {{ height:"100%" }}>
                <Logo />
                <ListItem 
                    className={classes.listItem+" "+classes.extraMargin} 
                    onClick={
                        ()=>{
                            setIndex(0);
                            history.push("/");
                        }
                    }
                >
                    <Home color="#000" size={36} />
                    <Indicator active={index===0} />
                </ListItem>
                <ListItem 
                    className={classes.listItem}
                    onClick={
                        ()=>{
                            setIndex(1);
                            history.push("/info");
                        }
                    }
                >
                    <Info color="#000" size={36} />
                    <Indicator active={index===1} />
                </ListItem>
                <ListItem 
                    className={classes.listItem}
                    onClick={
                        ()=>{
                            setIndex(2);
                            history.push("/settings");
                        }
                    }
                >
                    <Settings color="#000" size={36} />
                    <Indicator active={index===2} />
                </ListItem>
                <ListItem 
                    className={classes.listItem}
                    onClick={
                        ()=>{
                            setIndex(3);
                            history.push("/profile");
                        }
                    }
                >
                    <Avatar src="https://images.unsplash.com/photo-1610767540785-96b4c65de306" alt="You" />
                    <Indicator active={index===3} />
                </ListItem>
                <ListItem className={classes.listItemBottom}>
                    <LogOut color="#FF8400" size={36} />
                </ListItem>
            </List>
        </div>
    )
}

export default Sidebar
