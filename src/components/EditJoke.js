import React, { useState } from "react";

function EditJoke({ onUpdateJoke, joke }) {
    const {body, id} = joke
  
    const [jokeBody, setJokeBody] = useState(body)

    function handleFormSubmit(e) {
        e.preventDefault();
        onUpdateJoke({ id, body: jokeBody });
    }
   
    return (
        <div>

            <form className="edit-message" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="body"
                autoComplete="off"
                value={jokeBody}
                onChange={e => setJokeBody(e.target.value)}
            />
            <input type="submit" value="save" />
            </form>
        </div>
    )
}
export default EditJoke