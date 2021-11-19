export const JoinRoom ='OnJoinRoom'
export const UserData = (name,id,roomname)=>({
    type:'AddUser',
    name:name,
    Id:id,
    roomname:roomname,
})