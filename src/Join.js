import React,{useEffect,useRef} from "react";
import {useNavigate} from "react-router-dom";
import TextField  from "@material-ui/core/TextField";
import  * as ToBe from './container/store/action'
import { connect } from "react-redux";
import {io} from'socket.io-client'
let Username
let roomname
const  Join=(props)=> {
const socketRef = useRef()
const {dispatch}=props;
socketRef.current = io.connect("http://localhost:1650",{ transports: ['websocket'] }) 
const navigate = useNavigate()
useEffect(()=>{ 

  const HandleRoutes=()=>{
    navigate("/chat");
     } 
  socketRef.current.on("GetMyUser",(username,Roomname,id)=>{
      console.log("Data arrived")
    dispatch(ToBe.UserData(username,Roomname,id))
    HandleRoutes();
 })
 return () => socketRef.current.disconnect()
},[dispatch,navigate])

const OnUserChange=(event)=>{
Username = event.target.value
}
const OnRoomChange=(event)=>{
roomname=event.target.value
}
const OnMessageSubmit =(e)=>{
e.preventDefault()
socketRef.current.emit("JoinChatRoom",Username,roomname)
}

  const renderChat=()=>{
    return(
     <div>
       <p>Hello</p>
       {console.log("Users:"+Users.length)}
       {
          Users.map((user,index)=>{
            return  <p key={index}>Name:{user.name} Room:{user.id}</p>
          })
        }
     </div>
    ) 
    
  }
  const {Users} = props;
  return (
    <div className="App">
    <form onSubmit={OnMessageSubmit} action="">
      <h1>Join</h1>
      <div>
        <TextField name="UserName" label="Username" onChange={e=>OnUserChange(e)} autoComplete="off"></TextField>
        <TextField name="RoomName" label="Roomname" onChange={e=>OnRoomChange(e)} autoComplete="off"></TextField>
       </div>  
      <button onClick={e=>OnMessageSubmit(e)}>JOIN</button>
    </form>
    <div>
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
} 
const mapStateToProps = (state = {}) => {
    return {...state};
};
export default connect(mapStateToProps)(Join);
