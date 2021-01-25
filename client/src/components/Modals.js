import React from 'react'
import { Modal, Avatar, Typography, TextField, Dialog,DialogTitle, DialogActions, Button,Card,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ColorButton } from './Button';
import API from "../api";
import { AuthContext } from "../firebase/provider";
import { useHistory } from "react-router-dom";

const modalStyles = makeStyles((theme)=>({
    root:{
        height: 620,
        width: 600,
        background: "#FFF",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        flexDirection:"column",
        outline:'none',
        padding:20
    },
    modal:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontFamily:"Poppins",
        fontWeight:500,
        fontSize:24
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottom:"2px solid #A7A7A7",
        width:"100%",
        paddingBottom:8
    },
    logo:{
        marginRight:12,
        height:60,
        width:60
    },
    content:{
        height:520,
        width:"100%",
        borderRadius:10,
        overflowY:"auto",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        margin: theme.spacing(1),
        textTransform:"capitalize",
        borderRadius:100,
        paddingLeft:30,
        paddingRight:30
    },
    inputContainer:{
        marginBottom:40,
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
    },
    input:{
        fontFamily: "Poppins",
        backgroundColor: "#E5E5E5",
        borderRadius: 8,
        padding: 10,
        width:580
    },
    repoContainer:{
        display:"flex",
        height:520,
        width:"100%",
        borderRadius:10,
        overflowY:"auto",
        backgroundColor:"#f4f4f4",
        alignItems:"center"
    }
}))

/*
function SimpleCard({repo}) {
    const classes = useStyles();
    return (
    <div className={classes.root}>
          <Typography variant="h6" component="h2">
            {repo.name || ""}
          </Typography>
          <Typography color="textSecondary">
            {repo.description || ""}
          </Typography>
          <Link color="inherit" href={repo.html_url} target="_blank">Visit Repo</Link>  
          <hr className={classes.hr}></hr>
    </div>
    );
  }
 */
const useCardStyles =(active)=>makeStyles(()=>({
    root:{
        width:400,
        marginTop:"2%",
        backgroundColor:"#FFF",
        padding:"4%",
        border:'2px solid #FFF',
        textTransform:"capitalize",
        "&:hover":{
            borderBottom:'2px solid #FF8400',
            cursor:"pointer"
        },
        border:active?"2px solid #FF8400":""
    },
}))()
const SimpleCard = ({repo,active,selectRepo}) => {
    const classes = useCardStyles(active);
    return (
        <Card className={classes.root} onClick={selectRepo}>
            <Typography>
                {repo.name || ""}
            </Typography>
        </Card>
    )
}
export const GithubModal = ({open, handleClose}) => {
    const [logged,setLog] = React.useState(0);
    const classes = modalStyles();
    const [username,setUsername] =React.useState("sanskritip");
    const handleLogin = () =>{
        setLog(!logged);
    }
    const [selectedRepo,setSelectedRepo] = React.useState({});
    const { user } = React.useContext(AuthContext);
    const  history  = useHistory();
    const [ repos, setRepos] = React.useState([])
    
    React.useEffect(()=>{
        if(logged){
            API.importProject(username).then(data=>{
                setRepos(data || [{"name":"temp1"},{"name":"temp2"}]);
            })
        }
    },[logged])


    const handleSubmit = async (e) => {
        const repo= repos[selectedRepo]
        console.log(repo)
        const title = repo.name;
        const description = repo.description;
        console.log(user.uid,title,description)
        API.createProject(user.uid, { title, description, collaborators: {[user.uid] : true},status:1}).then(res => {
            history.push(`/project/${res.data.id}`);
        })
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={classes.modal}
        >
            <div className={classes.root}>
                <div className={classes.header}>
                    <Avatar src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className={classes.logo} />
                    <Typography className={classes.text}>
                        Import from Github
                    </Typography>
                </div>
                
                {
                    (!logged)?
                    <div className={classes.content} style={{backgroundColor:"#F4F4F4",overflow:"auto"}}>
                            <form>
                                 <div className={classes.inputContainer}>
                                        <Typography className={classes.text}>
                                            Github Username
                                        </Typography>
                                        <TextField 
                                            fullWidth
                                            InputProps={{disableUnderline: true}}
                                            className={classes.input} 
                                            onChange={(e) => {setUsername(e.target.value)}}
                                            value={username}
                                        />
                                    </div>
                                    <div className={classes.footer}>
                                    <ColorButton variant="contained" color="primary" onClick={handleLogin} className={classes.button}>
                                        Login
                                    </ColorButton>
                                    </div>
                            </form>
                            </div>
                
                    :
                    <Grid direction="column" className={classes.repoContainer}>
                        {repos.map((repo,index)=>(
                            <Grid item>
                                <SimpleCard repo={repo} active={selectedRepo===index} selectRepo={()=>setSelectedRepo(index)} />
                            </Grid>
                        ))}
                    </Grid>
                    
                }
                
                <div className={classes.footer}>
                    <ColorButton variant="contained" color="primary" onClick={()=>{handleSubmit()}} className={classes.button} style={{visibility:(!logged)?"hidden":"visible"}}>
                        Create
                    </ColorButton>
                </div>
            </div>
        </Modal>
    )
}

export const CreateProjectModal = ({open,handleClose}) => {
    const classes = modalStyles();
    const { user } = React.useContext(AuthContext);
    const  history  = useHistory();
    const [title,setTitle] = React.useState("");
    const [description,setDescription] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        API.createProject(user.uid, { title, description, collaborators: {[user.uid] : true},status:1}).then(res => {
            history.push(`/project/${res.data.id}`);
        })
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={classes.modal}
        >
            <div className={classes.root}>
                <div className={classes.header}>
                    <Typography className={classes.text}>
                        Start your project from scratch
                    </Typography>
                </div>
                <div className={classes.content}>
                    <form style={{width:"100%"}} onSubmit = {handleSubmit}>
                        <div className={classes.inputContainer}>
                            <Typography className={classes.text}>
                                Title
                            </Typography>
                            <TextField 
                                fullWidth
                                InputProps={{disableUnderline: true}}
                                className={classes.input} 
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                            />
                        </div>
                        <div className={classes.inputContainer}>
                            <Typography className={classes.text}>
                                Description
                            </Typography>
                            <TextField 
                                fullWidth
                                multiline 
                                rows={8} 
                                InputProps={{disableUnderline: true}}
                                className={classes.input} 
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                            />
                        </div>
                    </form>
                </div>
                <div className={classes.footer}>
                    <ColorButton variant="contained" color="primary" onClick={handleSubmit} className={classes.button}>
                        Create
                    </ColorButton>
                </div>
            </div>
        </Modal>
    )
}

export const ConfirmationModal = ({open,handleClose,id}) => {
    const history = useHistory();
    const handleDelete = async () => {
        API.deleteProject(id).then(res => {
            history.push("/dashboard");
        });
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
        >
            <DialogTitle id="alert-dialog-title">{"Are you sure you wanna delete?"}</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="primary" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}