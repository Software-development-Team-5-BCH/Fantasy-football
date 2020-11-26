import React, { Component } from 'react';
import axios from 'axios';

const API = "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/";
class Player extends Component {
  state = {
    league: {
      events: [],
      teams: [],
      elements: [],
      element_stats: [],
      element_types: [],
    },
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLaoding: true });
    axios.get(API, {
      params: {
        _limit: 1,
      },
    })
      .then((response) => this.setState({ league: response.data, isLoading: false }))

  }


  render() {
    if (this.state.isLoading) { return <p>Loading.....</p> }
    return (
      <div>
        <h2>Player list</h2>

        <ul>{this.state.league.events.map((items) =>

          (<li>{items.id}
            <p>{items.name}</p>
          </li>)

        )}</ul>


      </div>
    );
  }
}

export default Player;