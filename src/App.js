import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/"
    )
      .then((res) => res.json())
      .then((json) => {
        this.state({
          isLoaded: true,
          items: json,
        });
      });
  }
  render() {
    let { isLoaded, items } = this.state;

    if ((isLoaded = false)) {
      return <div>Loading..</div>;
    } else {
      return <div className="App">Data has been loaded</div>;
    }
  }
}

export default App;
