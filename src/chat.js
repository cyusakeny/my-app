import React,{useState,useRef,useEffect} from "react";
import io from "socket.io-client"
const Chat=()=>{
    const socketRef = useRef()
    const [state, setState] = useState({ UserId: "",UserName: "",ChatRoom:""});
    useEffect(()=>{
        var connectionOptions =  {
            transports: ['websocket'],
            'sync disconnect on unload': true
          }
          socketRef.current = io.connect("http://localhost:4000",connectionOptions)
          socketRef.current.on("GetMyUser",(UserName,RoomName,UserId)=>{
              console.log("Dax1:"+UserName)
              console.log("Dax1:"+RoomName)
              console.log("Dax1:"+UserId)
          })
    })
return(
    <div>
        <p>Hello</p>
    </div>
);
}
export default Chat;