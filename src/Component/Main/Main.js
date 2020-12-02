import React from "react";
import { Switch, Route } from "react-router-dom";
import Player from "./Component/Player/Player.js";

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Player}></Route>
      <Route exact path="/players" component={Player}></Route>
    </Switch>
  );
};

export default Main;
