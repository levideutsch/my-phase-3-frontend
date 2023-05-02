import React, { useState } from "react";

function JokeForm() {


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