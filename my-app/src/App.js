import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import MovieReturn from "./components/Search_Movie/MovieReturn";
import BucketList from "./components/Lists/BucketList";
import WatchedList from "./components/Lists/WatchedList";
import Friends from "./components/Friends/Friends";
import FriendRequests from "./components/Friends/FriendRequests";
import FindPeople from "./components/Friends/FindPeople";
import PublicList from "./components/Lists/PublicList";
import Publicf from "./components/Lists/Publicf";
import FriendList from "./components/Friends/FriendList";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <Switch>
            <Route path="/bucketlist">
              <BucketList />
            </Route>
            <Route path="/friendlist">
              <FriendList />
            </Route>
            <Route path="/requests">
              <FriendRequests />
            </Route>
            <Route path="/publicf">
              <Publicf />
            </Route>
            <Route path="/findpeople">
              <FindPeople />
            </Route>
            <Route path="/publiclist">
              <PublicList />
            </Route>
            <Route path="/watchedlist">
              <WatchedList />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/search">
              <MovieReturn />
            </Route>
            <Route path="/friends">
              <Friends />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </header>
      <main></main>
    </div>
  );
}

export default App;
