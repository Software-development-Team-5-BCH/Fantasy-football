// import './App.css';

// import Player from './Component/Player/Player';

// function App(props) {

//   return (
//     <div className="App">

//       <h1>Welcome to Fantasy Premier League</h1>
//       <Player />

//     </div>
//   );

import "./App.css";
import Player from "./Component/Player/Player.js";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Component/Homepage/Homepage";
import Table from "./Component/Table/Table";
import { firebaseAuth } from "./firebase";
import MyTeam from "./Component/MyTeam/MyTeam";
import Header from "./Component/Header/Header";
import tableRender from "./Component/Table/tableRender";

class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <BrowserRouter>
        <Header
          user={user}
          signOut={signOut}
          signInWithGoogle={signInWithGoogle}
        />
        <div>
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/players" component={Player} exact />
            <Route path="/table" component={tableRender} exact />
          </Switch>
        </div>
        {user && <MyTeam user={user} />}
      </BrowserRouter>
    );
  }
}

export default firebaseAuth(App);
