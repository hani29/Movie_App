import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Favorite from "./components/Favorite";
import Dislike from "./components/Dislike";
import Add from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Favorite />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/Dislike">
            <Dislike />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
