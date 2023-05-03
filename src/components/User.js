import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Joke from "./Joke";
// import api from '../api'
// import EditJoke from "./EditJoke";

function User({ jokes, onAddJoke, onJokeDelete, onUpdateJoke }) {

    // Body of form state
    const [body, setBody] = useState("")
    const [user, setUser] = useState({})

    // retrieve route parameters from the functional component rendered by the matching route
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then(response => response.json())
        .then(data => {
            setUser(data)
        })
    }, [id])


    // Adds joke to user's list
    function addJoke(e) {
        e.preventDefault();

        const joke = { body, user_id: user.id }

        onAddJoke(joke);
        setBody("");
    }

    return (
        <div className="my-jokes-application">
            <br/>
            <h2>{ user.username }</h2>
            <hr/>
            <h3>Jokes:</h3>
            {jokes
                .filter(joke => joke.user_id === id)
                .map(joke => <Joke
                    key={joke.id}
                    joke={joke}
                    handleDeleteClick={onJokeDelete}
                    onUpdateJoke={onUpdateJoke}/>)}
            <br/>
            <hr/>
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