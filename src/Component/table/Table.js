import React, { Component } from "react";
import axios from "axios";
import "./Table.css";

const API = "https://data-ui.football-data.org/fd/competitions/2021/table";
const params = {
  _limit: 1,
};

const whatever = API;

// http://api.football-data.org/v2/competitions/2021/standings
let config = {};

class Table extends Component {
  state = {
    premierLeague: {
      standings: [],
    },
    isLoading: false,
    points: "",
    position: "",
    played: "",
    won: "",
    drawn: "",
    lost: "",
    gf: "",
    ga: "",
    gd: "",
    form: "",
    next: "",
  };
  componentDidMount() {
    axios
      .get("http://api.football-data.org/v2/competitions/2021/standings", {
        params: {},
        headers: { "X-Auth-Token": "cb8f29c7705e44e0b795f3feb6546789" },
      })
      .then((response) =>
        this.setState({ premierLeague: response.data, isLoading: false })
      );
  }
  render() {
    console.log(this.state.premierLeague);
    console.log(
      JSON.parse(this.state.premierLeague.standings[0].table[1].position)
    );
    if (this.state.isLoading) {
      return <p>Loading.....</p>;
    }
    return (
      <div>
        <h1> Premier League Table</h1>
        <ul className="table">
          {this.state.premierLeague.standings.map((table) => (
            <li className="Teams" key={table.id}>
              <h2>hello</h2>
              <p>{table.playedGames}</p>
              <p>{table.won}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Table;
