import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Header} from '../components/Header';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    root:{
        display:"flex",
        flexGrow:1,
        flexDirection:"column"
    },
    container:{
        padding:"6%"
    },
    headerText:{
        fontSize:32,
        fontFamily:"Poppins",
        fontWeight:800
    }
}))

const Info = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title="Info" />
            <div className={classes.container} >
                <Typography className={classes.headerText}>Promanage who?</Typography>
                <br />
                Hello friend, thanks for trying out promanage. It is a little something a bunch of us build to make all our fellow developers' lives easier and make the coding journey less tedious. We do realise that there are a bunch of bugs and features that are yet to be developed, and thanks for remaining patient. We hope you succeed and bring together the developer community as it is in our vision and do big things together. You're awesome.
                <br/><br/>
                Checkout our github repository for more updates and to connect with us: <a href="https://github.com/avinash-vk/promanage" target="_blank">https://github.com/avinash-vk/promanage</a>
                <br/><br/>
                Build with 🧡 and a lot of <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" height={20} width={20} alt="js" />

            </div>
        </div>
    )
}

export default Info
