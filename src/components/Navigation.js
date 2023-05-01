import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0 6px 6px",
  background: "gray",
  textDecoration: "none",
  color: "white",
}


function Navigation() {
  return (
    <div id="navBar">
      <NavLink
        to="/"
        exact
        style={ linkStyles }
        activeStyle={{
        background: "black",
        }}
      >
       Home
      </NavLink>
      <NavLink
        to="/users"
        exact
        style={ linkStyles }
        activeStyle={{
          background: "black",
        }}
      >
        Users 
      </NavLink>
      {/* <NavLink
        to="/new-user"
        exact
        style={ linkStyles }
        activeStyle={{
        background: "black",
        }}
      >
        New User
      </NavLink> */}
      <hr/>
    </div>
  );
}

export default Navigation
