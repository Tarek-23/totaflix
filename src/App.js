import React, { useState } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <HomeScreen /> : <LoginScreen />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
