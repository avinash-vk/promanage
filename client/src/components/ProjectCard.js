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
import { useHistory } from 'react-router-dom';
import ROUTES from '../routes';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    maxHeight: 350,
    padding: 15,
    borderRadius:20,
    zIndex: 2,
    boxShadow: "1px 2px 10px rgba(0,0,0,0.25)",
    flex:1,
    "&:hover":{
      cursor:"pointer",
      boxShadow: "1px 2px 10px #FF8400",
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  font: {
    fontFamily:"Poppins",
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

const StatusLabel = ({status}) => {
  const statusMap = [
    {
      color:"#FF9696",
      title:"IN PROGRESS"
    },
    {
      color:"#26C8FB",
      title:"IDEA"
    },
    {
      color:"#0FF418",
      title:"DONE"
    }
  ]
  const { color, title } = statusMap[status - 1]
  return <div style={{ borderRadius: 100, backgroundColor: color,padding:5,paddingLeft:10,paddingRight:10,fontSize:10,color:"white"}}>
            {title}
         </div>
}

export default function ProjectCard({project}) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push(`/project/${project.id}`);
  }
  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardHeader
        action={<StatusLabel status = {project.status} />}
       title={project.title || "Untitled"}
       titleTypographyProps={{fontFamily:"Poppins"}}
      > 
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.font}>
          {project.description || ""} 
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
