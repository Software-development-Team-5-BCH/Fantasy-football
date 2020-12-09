import React, { Component } from 'react';
import axios from 'axios';

const API = "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/";
const params = {
  _limit: 1,
}


class Clubs extends Component {
  state = {
    club: {
      elements: [],
      teams: [],
    },
    teamlist: [],
    listactive: false,
    teamactive: true,

  }

  componentDidMount() {
    axios.get(API)
      .then((res) => this.setState({ club: res.data }))
  }
  listinghandler() {
    this.setState({ listactive: true })
  }
  searchHandler = (id) => {
    console.log(id)
    axios.get(API).then((res) => this.setState({ teamlist: res.data.elements.filter(item => item.team_code === id), teamactive: false }))
    //const result = this.state.elements.filter(item => item.team_code === id);

  }

  render() {
    return (this.state.listactive ? (
      < div >

        <div>
          <ul className="playerslist">{this.state.club.teams.map((items) =>
            (<li className="player" key={items.code}>
              <p onClick={() => this.searchHandler(items.code)}> +</p>
              <p>{items.name}</p>
              <p>{items.id}</p>
              <p>Total Players: {items.length}</p>
              <p>{items.short_name}</p>
            </li>)
          )}
          </ul>
        </div>

        <div>
          <h2>Playerlist by club</h2>
          <ul className="playerlist">{this.state.teamlist.map((items) =>
            (<li className="player" key={items.id}>
              <p>{items.first_name}</p>
              <p>{items.second_name}</p>
              <p>{items.second_name}</p>
              <p>{items.photo}</p>
              <div className="add" onClick={this.props.include}>
                +{" "}
              </div>
            </li>
            ))}
          </ul>
        </div>
      </div >) : (<button onClick={() => this.listinghandler()}>Club list</button>)

    );

  }
}

export default Clubs;