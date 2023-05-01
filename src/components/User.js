import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Joke from "./Joke";
// import EditJoke from "./EditJoke";

function User({ onAddJoke, onJokeDelete, onUpdateJoke }) {

    // Single user state
    const [user, setUser] = useState({
        jokes: []
    })


    // Body of form state
    const [body, setBody] = useState("")
    // retrieve route parameters from the functional component rendered by the matching route
    const  params = useParams()

    // GET's individual user
    useEffect(() => {
        fetch(`http://localhost:9292/users/${params.id}`)
        .then(response => response.json())
        .then(data => {
            setUser(data)
        })
    }, [])


    // Adds joke to user's list
    function addJoke(joke) {
        joke.preventDefault()
        
        fetch("http://localhost:9292/jokes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            body: body,
            user_id: params.id,
        }),
        })
        .then((r) => r.json())
        .then((newJoke) => {
            onAddJoke(newJoke);
            setUser({ ...user, jokes: [ ...user.jokes, newJoke ]})
            setBody("");
        });
    }

    function handleDeleteClick(joke) {
      
        fetch(`http://localhost:9292/jokes/${joke.id}`, {

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            },
        })
         onJokeDelete(joke.id)
    }

    function handleUpdateJoke(updatedJoke) {
        // setIsEditing(false);
        onUpdateJoke(updatedJoke);
    }


    const jokes = user.jokes.map(joke => <Joke key={joke.id} joke={joke} handleDeleteClick={handleDeleteClick} onUpdateJoke={handleUpdateJoke}/>)
  


    return (
        <div>
            <br/>
            <h2>{user.username}</h2>
            <hr/>
            <h3>Jokes:</h3>
            {/* <Joke handleDeleteClick={handleDeleteClick}/> */}
            {/* <br/> */}
            {jokes}
            <br/>
            {/* {isEditing ? (
                <EditJoke 
                onUpdateJoke={handleUpdateJoke} 
                />
            ) : (
                <p>{jokes}</p>
            )} */}
            <hr/>
            {/* <JokeForm onAddJoke={onAddJoke}/> */}
            <h2>Add new joke</h2>
            <form onSubmit={addJoke}>
            <input
                type="text"
                name="body"
                autoComplete="off"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Send</button>
            </form>
        </div>
    )
}
export default User