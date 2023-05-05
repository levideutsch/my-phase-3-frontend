import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Joke from "./Joke";


function User({ users, onAddJoke, onJokeDelete, onUpdateJoke }) {

    // Body of form state
    const [body, setBody] = useState("");
    const [user, setUser] = useState({ jokes: [] })

    // retrieve route parameters from the functional component rendered by the matching route
    const { id } = useParams()

    useEffect(() => {
        const user = users.filter(u => u.id == id)[0];
        if (user) setUser(user);
    }, [users, id])

    // Adds joke to user's list
    function addJoke(e) {
        e.preventDefault();

        const joke = { body, user_id: user.id }

        onAddJoke(joke);
        setBody("");
    }
   
    return (
        <div className="all-jokes">
            <br/>
            <div className="card">
            <h2 className="card__content">{ user.username }</h2>
            <hr/>
            <h3 className="card__content">Jokes:</h3>
            {user.jokes
                .map(joke => <Joke
                    key={joke.id}
                    joke={joke}
                    handleDeleteClick={onJokeDelete}
                    onUpdateJoke={onUpdateJoke}/>)}
            </div>
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