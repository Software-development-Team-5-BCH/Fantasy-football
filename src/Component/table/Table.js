import React, { Component } from "react";
import axios from "axios";
import "./Table.css";

const API =
  "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/";
const params = {
  _limit: 1,
};

class Table extends Component {
  state = {
    league: {
      teams: [],
      /* 
      points: 0,
      position,
      played,
      won,
      drawn,
      lost,
      gf,
      ga,
      gd,
      form: [],
      next,
      */
    },
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(API, { params })
      .then((response) =>
        this.setState({ league: response.data, isLoading: false })
      );
  }
  render() {
    if (this.state.isLoading) {
      return <p>Loading.....</p>;
    }
    return (
      <div>
        <h1> Premier League Table</h1>
        <ul className="table">
          {this.state.league.teams.map((team) => (
            <li className="Teams" key={team.id}>
              <h2>{team.name}</h2>
              <p>{team.position}</p>
              <p>{team.played}</p>
              <p>{team.points}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Table;
