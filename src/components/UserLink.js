import React from "react";
import { Link } from "react-router-dom";

function UserLink({ user }) {
    
    return (
    //    <div id="all-jokes">
    //     <Link to={`/users/${user.id}`}>
    //         <h3>{user.username}</h3>
    //     </Link>

    <div class="card">
        <Link class="card-title" to={`/users/${user.id}`}>
            <p class="card__content">{user.username}</p>
        </Link>
    </div>
    )
}
export default UserLink