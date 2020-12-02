import "./App.css";
import Player from "./Component/Player/Player.js";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Component/Homepage/Homepage";
import Table from "./Component/Table/Table.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/players" component={Player} exact />
            <Route path="/Table" component={Table} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
