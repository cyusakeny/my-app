import React,{useState,useRef,useEffect} from "react";
import io from "socket.io-client"
import  TextField  from "@material-ui/core/TextField";


function App() {

  const socketRef = useRef()
  const [state,setstaet] = useState({message:"",name:""})
  const [chat, setchat] = useState([])
 useEffect(()=>{
  var connectionOptions =  {
    transports: ['websocket'],
    'sync disconnect on unload': true
  }
  socketRef.current = io.connect("http://localhost:4000",connectionOptions)
  socketRef.current.on("message",({message,name})=>{
        setchat([...chat,{name,message}])
  })
 }, [chat])
  
 const OnTextChange = (event)=>{
  
    const GivenValue =event.target.value
    
    setstaet({...state,[event.target.name] : GivenValue })
  }
  const OnMessageSubmit =(e)=>{
e.preventDefault()
const {name,message} =state
socketRef.current.emit("textmessage",{name,message})
setstaet({message:'',name})
  }
  const renderChat=()=>{
    return(
      chat.map(({name,message},index)=>(
        <div key={index}>
          <p>
          <span>{name}:</span>
          <span>{message}</span>
            </p>
        </div>
      ))
    ) 
    
  }

  return (
    <div className="App">
    <form onSubmit={OnMessageSubmit}>
      <h1>Messanger</h1>
      <div>
        <TextField name="name" value={state.name} label="name" onChange={e=>OnTextChange(e)} ></TextField>
      </div>
      <div>
        <TextField name="message" value={state.message} label="message" onChange={e=>OnTextChange(e)} ></TextField>
      </div>
      <button>SendMessage</button>
    </form>
    <div>
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default App;
