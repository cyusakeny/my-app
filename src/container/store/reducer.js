import io from "socket.io-client"
import * as ActionTypes from "./action"
const initialState = {
counter:0,
FirstState:{
username:"",
roomname:"",
},
User:{
  name:"",
  id:"",
  roomname:"",
}
}
const socketRef = io.connect("http://localhost:4000",{ transports: ['websocket', 'polling', 'flashsocket'] })
const reducer = (state = initialState,action)=>{
             if(action.type === ActionTypes.JoinRoom){
             socketRef.emit("JoinChatRoom","Jerry","West")
  }
  socketRef.on("GetMyUser",(Username,Roomname,Id)=>{
    console.log("User:"+Username)
    return{
      ...state,
    User:{
      ...state.User,
      name:"Drift"
    }
}
  })
    return state;
}
export default  reducer;