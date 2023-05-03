import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Users from "./Users";
import User from "./User";

function App() {

    //Add joke data to state
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/jokes')
            .then(res => res.json())
            .then(setJokes)
    }, [])
   
    //User POST joke
    function handleAddJoke(joke) {
        fetch('http://localhost:9292/jokes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(joke)
        }).then(res => res.json())
        .then(joke => setJokes([...jokes, joke]))
    }

    //User DELETE joke
    function handleDeleteJoke({ id }) {
        fetch(`http://localhost:9292/jokes/${id}`, {
            method: 'DELETE'
        }).then(() => {
            setJokes(jokes.filter((joke) => joke.id !== id))
        });
    }

    //User PATCH joke
    function handleUpdateJoke(joke) {
        fetch(`http://localhost:9292/jokes/${joke.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                body: joke.body,
            }),
        })
        .then(res => res.json())
        .then((joke) => {
            setJokes(jokes.map(j => j.id == joke.id ? joke : j))
        });
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
                <User jokes={jokes} onAddJoke={handleAddJoke} onJokeDelete={handleDeleteJoke} onUpdateJoke={handleUpdateJoke}/>
            </Route>

        </Switch>
     </Router>
    )
  }
  
  export default App;
  