import React, { useState, useEffect }  from "react";
import UserLink from "./UserLink";
import NewUser from "./NewUser";

function Users() {

    //users state
    const [users, setUsers] = useState([])
    // const [userForm, setUserForm] = useState(false)

    //GET's users data and adds it to users state
    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
   

    //Maps over users and adds each individual user to our UserLink component
    const usersList = users.map(user => <UserLink key={user.id} user={user}/>)

    function handleAddUser(newUser) {
        setUsers([...users, newUser]);
    }

    return (
        <div>
            <ul>
            {usersList}
            </ul>
        <hr/>
            <NewUser users={users} setUsers={setUsers} onAddUser={handleAddUser}/>
        </div>
    )
}
export default Users