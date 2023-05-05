import React from "react";
import { Link } from "react-router-dom";

function UserLink({ user }) {
    
    return (

    <div className="card">
        <Link className="card-title" to={`/users/${user.id}`}>
            <p className="card__content">{user.username}</p>
        </Link>
    </div>
    )
}
export default UserLink