import React from "react";
import {useNavigate} from "react-router-dom";
import TextField  from "@material-ui/core/TextField";
import { connect } from "react-redux";
import  * as ToBe from './container/store/action'

let username;
let roomname;
const  Join=(props)=> {
  const navigate = useNavigate();
 const HandleRoutes=()=>{
navigate("/chat");
 } 

 const OnUserChange = (event)=>{
username = event.target.value
console.log(username);
  }
  const OnRoomChange = (event)=>{
    roomname = event.target.value
    console.log(roomname);
      }
  const OnMessageSubmit =(e)=>{
e.preventDefault()
HandleRoutes();
  }
  const renderChat=()=>{
    return(
     <div>
       <p>Hello</p>
     </div>
    ) 
    
  }

  return (
    <div className="App">
    <form onSubmit={OnMessageSubmit} action="">
      <h1>Join</h1>
      <div>
        <TextField name="UserName" label="Username" onChange={e=>OnUserChange(e)} autoComplete="off"></TextField>
        <TextField name="RoomName" label="Roomname" onChange={e=>OnRoomChange(e)} autoComplete="off"></TextField>
       </div>  
      <button>Redirect</button>
    </form>
    <button onClick={props.OnUpdateState}>Join</button>
    <div>
        <h1>Chat Log</h1>
        {renderChat()}
        {props.first}
      </div>
    </div>
  );
}
const mapStateToProps = state=>{
  return {
first:state.User.name,
  };
}
const mapDispatchToProps = dispatch =>{
  return{
    OnUpdateState :()=> dispatch({type:ToBe.JoinRoom,Username:username,Roomname:roomname})
  }
 

}
export default connect(mapStateToProps,mapDispatchToProps)(Join) ;
