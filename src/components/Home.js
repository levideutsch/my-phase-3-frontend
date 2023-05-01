import React from "react";
import AllJokes from "./AllJokes";


function Home({ jokes }) {

    // const [jokes, setJokes] = useState([])


    // useEffect(() => {
    //     fetch("http://localhost:9292/jokes")
    //     .then(response => response.json())
    //     .then(data => setJokes(data))
    // }, [])

   //Displays all jokes to Home page
    const displayJokes = jokes.map(joke => <AllJokes key={joke.id} joke={joke.body}/>)

    return(
     <div>
        <h1>My jokes application</h1>
        {displayJokes}
     </div>
    )
}
export default Home
