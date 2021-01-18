import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {Share2} from 'react-feather';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    borderRadius:20,
    zIndex: 2,
    boxShadow: "1px 2px 10px rgba(0,0,0,0.25)",
    flex:1
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  row :{
      flexDirection:"row",
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  left:{
    justifyContent: 'flex-start',
  },
  right:{
    justifyContent: 'flex-end',
  }
}));

export default function ProjectCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        action={<div style={{ borderRadius: 100, backgroundColor: "#FF9696",padding:5,fontSize:10,color:"white"}}>
        IN PROGRESS{" "}
      </div>}
        title="Meraki"
        titleTypographyProps={{fontFamily: "Poppins",fontWeight:"500"}}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" fontFamily="Poppins">
          An job finding application through stories for the less fortunate in
          order to bridge gaps between jobs and the jobless.
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="share" >
        <Share2 color="#000" size={20} />
        </IconButton>
          <AvatarGroup style={{marginLeft:"auto"}}>
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D" className={classes.small}/>
            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfA%3D%3D" className={classes.small}/>
            <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfA%3D%3D" className={classes.small}/>
          </AvatarGroup>
      </CardActions>
    </Card>
  );
}
