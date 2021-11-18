import React from "react";
import { connect } from "react-redux";
const Chat=(props)=>{
return(
    <div>
        <p>Hello {props.first}</p>
    </div>
);
}
const mapStateToProps = state=>{
    return {
  first:state.User.name,
    };
  }
export default connect(mapStateToProps)(Chat);