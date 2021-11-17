
const initialState = {
FirstState :{
    UserName:"keny",
    RoomName:"",
}
}
const reducer = (state = initialState,Action)=>{
    if (Action.Type==='UPDATESTATE') {
       state.FirstState={
           UserName:"Kennny"
       }
    }
    
}
export default  reducer;