import React, { useState, useEffect }  from "react";
import UserLink from "./UserLink";
import NewUser from "./NewUser";

function Users({users, onAddUser}) {

    //Maps over users and adds each individual user to our UserLink component
    const usersList = users.map(user => <UserLink key={user.id} user={user}/>)

    return (
        <div>
            <ul>
            {usersList}
            </ul>
            <hr/>
            <NewUser onAddUser={onAddUser}/>
        </div>
    )
}
export default Users