import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Users from "./Users";
import User from "./User";

function App() {

    //Add joke data to state
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/users')
            .then(res => res.json())
            .then(setUsers)
    }, [])

    //User POST joke
    function handleAddJoke(joke) {
        fetch('http://localhost:9292/jokes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(joke)
        }).then(res => res.json())
        .then(joke => {
            // find the user, update the joke, update that user in the array
            setUsers(users.map(user => user.id === joke.user_id
                ? { ...user, jokes: [ ...user.jokes, joke ]}
                : user))
        })
        // .then(joke => setJokes([...jokes, joke]))
    }

    //User DELETE joke
    function handleDeleteJoke({ id }) {
        fetch(`http://localhost:9292/jokes/${id}`, {
            method: 'DELETE'
        }).then(() => {
            // go through each user and make sure that if the joke id matches the deleted one it is removed from the state
            setUsers(
                users.map(
                    user => ({ ...user, jokes: user.jokes.filter(joke => joke.id !== id)})
                )
            );
            // setJokes(jokes.filter((joke) => joke.id !== id))
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
            // find the user with the joke
            setUsers(users.map(user => user.id === joke.user_id
                    // find the joke
                    ? { ...user, jokes: user.jokes.map(j => j.id === joke.id 
                        ? joke // update the joke
                        : j) } // keep the old jokes as they are
                    : user // keep the other users as they are
                ))
            // setJokes(jokes.map(j => j.id === joke.id ? joke : j))
        });
    }

    function handleAddUser(user) {
        setUsers([...users, user]);
    }

    const jokes = users.reduce((jokes, user) => [...jokes, ...user.jokes], []);
console.log(jokes)
console.log(users)
    return (
     <Router>
        <Navigation/>
        <Switch>

            <Route exact path="/">
                <Home jokes={jokes}/>
            </Route>

            <Route exact path="/users">
                <Users users={users} onAddUser={handleAddUser} />
            </Route>

            <Route path="/users/:id">
                <User users={users}
                    onAddJoke={handleAddJoke}
                    onJokeDelete={handleDeleteJoke}
                    onUpdateJoke={handleUpdateJoke}/>
            </Route>

        </Switch>
     </Router>
    )
  }
  
  export default App;
  