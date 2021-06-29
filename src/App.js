import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import LoginForm from "./components/loginform";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Originals from "./components/Originals";
import Watchlist from "./components/Watchlist";
import Series from "./components/Series";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/Detail">
            <Detail />
          </Route>
          <Route path="/Watchlist">
            <Watchlist />
          </Route>
          <Route path="/Series">
            <Series />
          </Route>
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/Originals">
            <Originals />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/LoginForm">
            <LoginForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
