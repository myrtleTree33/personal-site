import React, { Component } from "react";

import { Link, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Cv from "./screens/Cv";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cv">Cv</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={Cv} />
        </Switch>
      </div>
    );
  }
}

export default App;
