import React from "react";
import AllJokes from "./AllJokes";


function Home({ jokes }) {


   //Displays all jokes to Home page
    const displayJokes = jokes.map(joke => <AllJokes key={joke.id} joke={joke.body} time={joke.created_at}/>)

    return(
     <div id="my-jokes-application">
        <h1>My jokes application</h1>
        <hr />
        {displayJokes}
     </div>
    )
}
export default Home
