import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditJoke({ onUpdateJoke, joke }) {
    const {body, id} = joke
  
    const [jokeBody, setJokeBody] = useState(joke.body)

  console.log(jokeBody)

    function handleFormSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:9292/jokes/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            body: jokeBody,
          }),
        })
          .then((r) => r.json())
          .then((updatedJoke) => onUpdateJoke(updatedJoke));
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