import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Select, MenuItem } from '@material-ui/core';
import API from "../../api";
import {useParams} from "react-router-dom";
import { ColorButton } from '../../components/Button';
import {ConfirmationModal} from '../../components/Modals';

const projectTabStyles = makeStyles((theme)=>({
    contentContainer:{
        display:"flex",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
    },
    text:{
        fontFamily:"Poppins",
        fontWeight:400,
        fontSize:18,
        color:'#FF8400'
    },
    root:{
        height: "80%",
        width: "80%",
        background: "#FFF",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        flexDirection:"column",
        outline:'none',
        padding:20,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    content:{
        width:"100%",
        borderRadius:10,
        overflowY:"auto",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFF'
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
        backgroundColor: "#F5F5F5",
        borderRadius: 8,
        padding: 10,
    },
    button:{
        margin: theme.spacing(1),
        textTransform:"capitalize",
        borderRadius:100,
        paddingLeft:30,
        paddingRight:30
    },
    buttonDelete:{
        margin: theme.spacing(1),
        textTransform:"capitalize",
        borderRadius:100,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:"red"
    },
}));

const ProjectTab = ({setLegacyTitle}) => {
    const classes = projectTabStyles();
    const { id } = useParams();
    const [title,setTitle] = React.useState(null);
    const [description,setDescription] = React.useState("");
    const [status, setStatus] = React.useState(1);
    const [changed, setChanged] = React.useState(false);
    const [open,setOpen] = React.useState(false);

    const handleUpdate = () => {
        API.updateProject(id,{ title, description, status}).then(res => setLegacyTitle(title));
        setChanged(false);
    }

    React.useEffect(()=>{
        API.getProject(id).then(data => {
            const {title, description, status} = data.data;
            setTitle(title);
            setDescription(description);
            setStatus(status);
            setLegacyTitle(title);
          });
    },[])

    if (title===null) return <p>Loading...</p>
    return (
        <div className={classes.contentContainer}>
                <div className={classes.root}>
                    <div className={classes.content}>
                        <form style={{width:"95%"}}>
                            <div className={classes.inputContainer}>
                                <Typography className={classes.text}>
                                    Title
                                </Typography>
                                <TextField 
                                    fullWidth
                                    InputProps={{disableUnderline: true}}
                                    className={classes.input} 
                                    value={title}
                                    onChange={(e)=>{setTitle(e.target.value);setChanged(true);}}
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
                                    value={description}
                                    onChange={(e)=>{setDescription(e.target.value);setChanged(true);}}
                                />
                            </div>
                            <div style = {{ marginBottom:20}} >
                                <Typography className={classes.text} style={{display:"inline-flex"}}>
                                    Status
                                </Typography>
                                <Select
                                    labelId="status"
                                    id="status-select"
                                    value={status}
                                    onChange={(e) => {
                                        setStatus(e.target.value);
                                        setChanged(true);
                                    }}
                                    disableUnderline
                                    style={{marginLeft:16}}
                                >
                                    <MenuItem key = {"In Progress"} value={1}>
                                        <Typography style={{
                                            backgroundColor:"#FF9696",
                                            color:"#FFF",
                                            borderRadius:100,
                                            padding:4,
                                            paddingLeft:12,
                                            paddingRight:12
                                        }}>
                                            In Progress
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem key = {"Idea"} value={2}>
                                        <Typography style={{
                                            backgroundColor:"#26C8FB",
                                            color:"#FFF",
                                            borderRadius:100,
                                            padding:4,
                                            paddingLeft:12,
                                            paddingRight:12
                                        }}>
                                            Idea
                                        </Typography>
                                    </MenuItem><MenuItem key = {"Done"} value={3}>
                                        <Typography style={{
                                            backgroundColor:"#0FF418",
                                            color:"#FFF",
                                            borderRadius:100,
                                            padding:4,
                                            paddingLeft:12,
                                            paddingRight:12
                                        }}>
                                            Done
                                        </Typography>
                                    </MenuItem>
                                </Select>
                            </div>  
                            <div className={classes.inputContainer}>
                                <Typography className={classes.text}>
                                    Collaborators
                                </Typography>
                            </div>
                        </form>
                    </div>
            </div>
            <div style = {{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                {
                    changed?
                    <ColorButton variant="contained" color="primary" onClick={handleUpdate} className={classes.button}>
                        Update
                    </ColorButton>:null
                }
                <ColorButton variant="contained" color="primary" onClick={()=>setOpen(true)} className={classes.buttonDelete}>
                    Delete
                </ColorButton>
                <ConfirmationModal open={open} handleClose={()=>setOpen(false)} id={id} />
            </div>
            
        </div>
    )
}

export default ProjectTab
