import React from "react";
import { Link } from "react-router-dom";

function UserLink({ user }) {
    
    return (
       <div id="user-names">
        <Link to={`/users/${user.id}`}>
            <h3>{user.username}</h3>
        </Link>
       </div>
    )
}
export default UserLink