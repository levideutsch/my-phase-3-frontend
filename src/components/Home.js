import React from "react";
import AllJokes from "./AllJokes";


function Home({ jokes }) {

// console.log(jokes)
// let time = jokes[0].created_at.split()
// console.log(time[4])

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
