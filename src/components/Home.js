import React from "react";
import AllJokes from "./AllJokes";


function Home({ jokes }) {
// console.log(jokes[0].user_id)

   //Displays all jokes to Home page
    const displayJokes = jokes.map(joke => <AllJokes key={joke.id} joke={joke.body}/>)

    return(
     <div id="my-jokes-application">
        <h1>My jokes application</h1>
        <hr />
        {displayJokes}
     </div>
    )
}
export default Home
