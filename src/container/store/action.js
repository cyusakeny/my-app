export const JoinRoom ='OnJoinRoom'
export const UserData = (name,id,roomname)=>({
    type:'UserData',
    name:name,
    Id:id,
    roomname:roomname,
})
export const NewUser = (name,id,roomname)=>({
    type:'NewUser',
    name:name,
    Id:id,
    roomname:roomname
})

