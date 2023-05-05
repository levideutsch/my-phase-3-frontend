import React, { useState } from "react";


function NewUser({ onAddUser }) {

    const [body, setBody] = useState("")
  

    function addUser(e) {
        e.preventDefault()
        
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