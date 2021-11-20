import React from "react";
import { connect } from "react-redux";
const Chat=(props)=>{
  const {User,Users} = props;
return(
    <div>
        <p>Hello {User.name}</p>
        {
          Users.map((user,index)=>{
            return  <p key={index}>Name:{user.name} Room:{user.id}</p>
          })
        }
    </div>
);
}
  const mapStateToProps = (state = {}) => {
    return {...state};
};
export default connect(mapStateToProps)(Chat);