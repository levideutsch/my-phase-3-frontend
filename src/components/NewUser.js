import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewUser({ users, setUsers, onAddUser }) {

    const [body, setBody] = useState("")
    // const [user, setUser] = useState({
    //     username: 
    // })

    function addUser(user) {
        user.preventDefault()
        
        fetch(`http://localhost:9292/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: body,
        }),
        })
        .then((r) => r.json())
        .then((newUser) => {
            onAddUser(newUser);
            // setUsers({ ...user, jokes: [ ...user.jokes, newJoke ]})
            setBody("");
        });
    }

    return (
       <div>
        <h3>Create new user</h3>

        <form className="new-user" onSubmit={addUser}>
            <input
                type="text"
                name="body"
                placeholder="input name"
                autoComplete="off"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <input type="submit" value="create" />
            </form>
       </div>
    )
}
export default NewUser