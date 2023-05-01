import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Users from "./Users";
import User from "./User";
// import NewUser from "./NewUser";


function App() {

    //Add joke data to state
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/jokes")
        .then(response => response.json())
        .then(data => setJokes(data))
    }, [])
   
    //User POST joke
    function handleAddJoke(newJoke) {
        setJokes([...jokes, newJoke]);
    }

    //User DELETE joke
    function handleDeleteJoke(id) {
        const updatedJokes = jokes.filter((joke) => joke.id !== id);
        setJokes(updatedJokes);
    }

    //User PATCH joke
    function handleUpdateJoke(updatedJokeObj) {
        const updatedJokes = jokes.map((joke) => {
          if (joke.id === updatedJokeObj.id) {
            return updatedJokeObj;
          } else {
            return joke;
          }
        });
        setJokes(updatedJokes);
      }



    return (
     <Router>
        <Navigation/>
        <Switch>

            <Route exact path="/">
                <Home jokes={jokes}/>
            </Route>

            <Route exact path="/users">
                <Users/>
            </Route>

            <Route path="/users/:id">
                <User userJokes={jokes} onAddJoke={handleAddJoke} onJokeDelete={handleDeleteJoke} onUpdateJoke={handleUpdateJoke}/>
            </Route>

        </Switch>
     </Router>
    )
  }
  
  export default App;
  