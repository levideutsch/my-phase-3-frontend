import React, { useState } from "react";
import EditJoke from "./EditJoke";

function Joke({ joke, handleDeleteClick, onUpdateJoke }) {

  const [showForm, setShowForm] = useState(false)


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

    return (
      
        <div>
            <h3 class="card__content">{joke.body}</h3>
            <button onClick={() => handleDeleteClick(joke)}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>

          {showForm ? <EditJoke joke={joke} onUpdateJoke={onUpdateJoke}/>: null}
          <button onClick={handleClick}>
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>
        </div>
       
      
    )
}
export default Joke