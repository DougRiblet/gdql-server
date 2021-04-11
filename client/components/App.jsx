import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/show">Add Show</NavLink>
          </li>
          <li>
            <NavLink to="/venue">Add Venue</NavLink>
          </li>
          <li>
            <NavLink to="/song">Add Song</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/show">
          <Show />
        </Route>
        <Route path="/venue">
          <Venue />
        </Route>
        <Route path="/song">
          <Song />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Show() {
  return <h2>Add Show</h2>;
}

function Venue() {
  return <h2>Add Venue</h2>;
}

function Song() {
  return <h2>Add Song</h2>;
}