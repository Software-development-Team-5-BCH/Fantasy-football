import React, { Component } from "react";
import axios from "axios";
import "./Fixtures.css";

class Fixtures extends Component {
  state = {
    premierLeague: {
      matches: [],
    },
    isLoading: false,
    matchday: '',
    };
  
  componentDidMount() {
    axios
      .get("https://api.football-data.org/v2/competitions/2021/matches?season=2020", {
        params: {},
        headers: { "X-Auth-Token": "cb8f29c7705e44e0b795f3feb6546789" },
      })
      
      .then((response) =>
        this.setState({ premierLeague: response.data, isLoading: false })
      );
  }
  render() {
    console.log(this.state.premierLeague)
    console.log(this.state.premierLeague.matches)
    console.log('######')
    console.log(this.state.premierLeague.competition)
    console.log('########')
    console.log(this.state.premierLeague.matches[60])
    console.log('#######')
    console.log(this.state.premierLeague.matches[60])
    
    

    if (this.state.isLoading) {
      return <p>Loading.....</p>;
    }
    return (
      <div>
        <h1>Fixtures</h1>
      </div>
    );
  }
}
export default Fixtures;
