import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Favoris from "./containers/Favoris";
import Home from "./containers/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/favoris">
          <Favoris />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
