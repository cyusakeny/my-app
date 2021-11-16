import React,{useState,useRef,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import io from "socket.io-client"
import TextField  from "@material-ui/core/TextField";


const  Join=()=> {
  const navigate = useNavigate();
  const socketRef = useRef()
  const [state, setState] = useState({ UserName: "",RoomName: ""});
 useEffect(()=>{
  var connectionOptions =  {
    transports: ['websocket'],
    'sync disconnect on unload': true
  }
  socketRef.current = io.connect("http://localhost:4000",connectionOptions)
 })
 const HandleRoutes=()=>{
navigate("/chat");
 } 

 const OnTextChange = (event)=>{
setState({...state,[event.target.name]:event.target.value});
console.log("Name:"+state.UserName);
  }
  const OnMessageSubmit =(e)=>{
e.preventDefault()
socketRef.current.emit("JoinChatRoom",state);
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
        <TextField name="UserName" label="Username" onChange={e=>OnTextChange(e)} autoComplete="off"></TextField>
        <TextField name="RoomName" label="Roomname" onChange={e=>OnTextChange(e)} autoComplete="off"></TextField>
       </div>  
      <button>Join</button>
    </form>
    <div>
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default Join;
