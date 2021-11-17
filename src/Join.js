import React,{useState,useRef,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import TextField  from "@material-ui/core/TextField";
import { connect } from "react-redux";

const  Join=(props)=> {
  const navigate = useNavigate();
 const HandleRoutes=()=>{
navigate("/chat");
 } 

 const OnTextChange = (event)=>{

console.log("Name:");
  }
  const OnMessageSubmit =(e)=>{
e.preventDefault()
this.OnUpdateState();
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
        {console.log("Dax:"+props.First.UserName)}
      </div>
    </div>
  );
}
 const mapStateToProps=state=>{
   return {
    First : state.FirstState
   }
 }
 const mapDispatchToProps = dispatch =>{
   return{
     OnUpdateState:()=> dispatch({type:'UPDATESTATE'})
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Join) ;
