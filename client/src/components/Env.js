import React from "react";
import { makeStyles} from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Copy} from "react-feather";
import {PlusCircle,MinusCircle} from "react-feather";
const useStyles = makeStyles(() => ({
    root:{
        borderRadius:20,
        backgroundColor:"white",
        zIndex:2,
        boxShadow: "1px 2px 10px rgba(0,0,0,0.25)",
        padding:"5%"
    },
    child:{
        alignSelf:"center",
        marginTop:20
    },
    url:{
        marginTop:20,
        backgroundColor:"#F2F2F2",
        borderRadius:10,
        padding:'2%',
        fontSize:15
    }
}));
export default function Env(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <span style={{ color: 'black',textTransform:"capitalize",fontWeight:"bold",fontSize:15}}>Your environemt for Meraki</span>
           <div className={classes.child}>
             <DynamicTable/>
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
      value:"",
      items: []
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
    var items = this.state.items;
    items.push({key:this.state.key,value:this.state.value});
    this.setState({
      items:items,
      key:"",
      value:""
    });
  }
  handleKeyChanged(i, event) {
    var items = this.state.items;
    items[i].key = event.target.value;
    this.setState({
      items: items
    });
  }
  handleValueChanged(i, event) {
    var items = this.state.items;
    items[i].value = event.target.value;
    this.setState({
      items: items
    });
  }
  handleItemDeleted(i) {
    var items = this.state.items;
    items.splice(i, 1);
    this.setState({
      items: items
    });
  }
  renderRows() {
    var context = this;
    return  this.state.items.map(function(o, i) {
              return (
                <>
                    <input
                      type="text"
                      value={o.key}
                      onChange={context.handleKeyChanged.bind(context, i)}
                      style={{width:"30%",padding:10}}
                    />
                    <input
                      type="text"
                      value={o.value}
                      onChange={context.handleValueChanged.bind(context, i)}
                      style={{width:"50%",padding:10}}
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
        <hr/>
        <input
          type="text"
          value={this.state.key}
          onChange={this.updateKey.bind(this)}
          style={{width:"30%",padding:10}}
        />
        <input
          type="text"
          value={this.state.value}
          onChange={this.updateValue.bind(this)}
          style={{width:"50%",padding:10}}
        />
        <IconButton aria-label="add"  onClick={this.handleClick.bind(this)} ><PlusCircle/></IconButton>
      </div>
    );
  }
}