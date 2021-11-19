import React from "react";
import {useNavigate} from "react-router-dom";
import TextField  from "@material-ui/core/TextField";
import  * as ToBe from './container/store/action'
import { connect } from "react-redux";
import {io} from'socket.io-client'
let Username
let roomname
const  Join=(props)=> {
const {dispatch,User} = props,
 socketRef= io.connect("http://localhost:4000",{ transports: ['websocket', 'polling', 'flashsocket'] })
socketRef.on("GetMyUser",(username,Roomname,id)=>{
  dispatch(ToBe.UserData(username,Roomname,id))
})
const navigate = useNavigate();
const HandleRoutes=()=>{
navigate("/chat");
 } 
const OnUserChange=(event)=>{
Username = event.target.value
}
const OnRoomChange=(event)=>{
roomname=event.target.value
}
const OnMessageSubmit =(e)=>{
e.preventDefault()
socketRef.emit("JoinChatRoom",Username,roomname)
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
        {User.name}
      </div>
    </div>
  );
} 
const mapStateToProps = (state = {}) => {
    return {...state};
};
export default connect(mapStateToProps)(Join);
