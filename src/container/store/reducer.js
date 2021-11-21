const initialState = {
User:{
  name:"",
  id:"",
  roomname:"",
},
Users:[
]
}
const reducer = (state = initialState,action)=>{
             if(action.type === 'UserData'){
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
  if (action.type==='NewUser') {
    return{
      ...state,
      Users:state.Users.concat([{ name:action.name,id:action.Id,roomname:action.roomname}])
    }
  }
    return state;
}
export default  reducer;