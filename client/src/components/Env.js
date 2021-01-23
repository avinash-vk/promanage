import React from "react";
import { makeStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import {Copy} from "react-feather";
import {PlusCircle,MinusCircle} from "react-feather";
import API from '../api';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root:{
        borderRadius:20,
        backgroundColor:"white",
        zIndex:2,
        boxShadow: "1px 2px 10px rgba(0,0,0,0.25)",
        padding:"5%",
        width:"60%",
        height:"60%"
    },
    child:{
        alignSelf:"center",
        marginTop:20,
        justifyContent:'center',
        overflow:"auto",
        height:"60%"
    },
    url:{
        marginTop:20,
        backgroundColor:"#F2F2F2",
        borderRadius:10,
        padding:'2%',
        fontSize:15
    }
}));
export default function Env({project}){
    const classes = useStyles();
    const { id } = useParams();
    const [ variables, setVariables ] = React.useState([]);
    React.useEffect(()=>{
        API.getEnv(id).then(data => {
            setVariables(data.variables);
          });
    },[])

    return (
        <div className={classes.root}>
            <span style={{ color: 'black',textTransform:"capitalize",fontWeight:600,fontSize:28}}>Your environemt for Meraki</span>
           <div className={classes.child}>
             <DynamicTable variables = {variables} setVariables = {setVariables} />
          </div> 
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
class DynamicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key:"",
      value:""
    }
  }
  updateKey(event) {
    this.setState({
      key: event.target.value
    });
  }
  updateValue(event){
    this.setState({
      value:event.target.value
    })
  }
  handleClick() {
    var items = this.props.variables;
    if (this.state.key == "" || this.state.key == "")
      return;
    items.push({key:this.state.key,value:this.state.value});
    this.setState({
      key:"",
      value:""
    });
    this.setVariables(items);
  }
  handleKeyChanged(i, event) {
    var items = this.props.variables;
    items[i].key = event.target.value;
    this.setVariables(items)
  }
  handleValueChanged(i, event) {
    var items = this.props.variables;
    items[i].value = event.target.value;
    this.setVariables(items)
  }
  handleItemDeleted(i) {
    var items = this.props.variables;
    items.splice(i, 1);
    this.setVariables(items)
  }
  renderRows() {
    var context = this;
    return  this.props.variables.map(function(o, i) {
              return (
                <>
                    <input
                      type="text"
                      value={o.key}
                      onChange={context.handleKeyChanged.bind(context, i)}
                      style={{width:"30%",padding:10}}
                      disabled
                    />
                    <input
                      type="text"
                      value={o.value}
                      onChange={context.handleValueChanged.bind(context, i)}
                      style={{width:"50%",padding:10}}
                      disabled
                    />
                    <IconButton aria-label="add"  onClick={context.handleItemDeleted.bind(context, i)}><MinusCircle/></IconButton>
                    </>
              );
            });
  }

  render() {
    return (
      <div>
        <table style={{width:"100%"}}>
        <colgroup>
        <col span="1" style={{width:"30%"}}/>
       <col  span="1" style={{width:"50%"}}/>
       <col span="1" style={{width:"20%"}}/>
        </colgroup>
          <thead>
            <tr>
              <th>
                Key
              </th>
              <th>
                Value
              </th>
              <th>
              </th>
            </tr>
          </thead>
        </table>
        {this.renderRows()}
        <input
          type="text"
          value={this.state.key}
          onChange={this.updateKey.bind(this)}
          style={{width:"30%",padding:10}}
          placeholder="Environment variable"
        />
        <input
          type="text"
          value={this.state.value}
          onChange={this.updateValue.bind(this)}
          style={{width:"50%",padding:10}}
          placeholder="Value"
        />
        <IconButton aria-label="add"  onClick={this.handleClick.bind(this)} ><PlusCircle/></IconButton>
      </div>
    );
  }
}