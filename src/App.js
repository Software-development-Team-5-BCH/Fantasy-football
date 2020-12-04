import "./App.css";
import Player from "./Component/Player/Player.js";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Component/Homepage/Homepage";
import Table from "./Component/table/Table";
import Fixtures from "./Component/Fixtures/Fixtures";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/players" component={Player} exact />
            <Route path="/Table" component={Table} exact />
            <Route path="/fixtures" component={Fixtures} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
