const initialState = {
User:{
  name:"",
  id:"",
  roomname:"",
}
}
const reducer = (state = initialState,action)=>{
             if(action.type === 'AddUser'){
               return{
                 ...state,
                 User:{
                   ...state.User,
                   name:action.name,
                   id:action.Id,
                   roomname:action.roomname,              
                 }
               }
  }

    return state;
}
export default  reducer;