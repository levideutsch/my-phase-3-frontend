import React, { useState } from "react";

function JokeForm() {

    // const [body, setBody] = useState("")

    // function addJoke(joke) {

    //     fetch(`http://localhost:9292/jokes`, {
    //         method: "POST",
    //         header: {

    //         },
    //         body: JSON.stringify({
    //             body: joke.body,
    //             user_id: params.id
    //         })
    //     })
    // }

    return (
        <div>
        <h3>Add new joke</h3>
        <form>
            <label>
                Joke:
                <input type="text" name="joke" />
            </label>
                <input type="submit" value="Submit" />
        </form>
        </div>
    )
}
export default JokeForm