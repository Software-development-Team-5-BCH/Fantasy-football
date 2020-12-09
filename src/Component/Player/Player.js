import React, { Component } from "react";
import axios from "axios";
import "./Player.css";
import Clubs from "../Club/Club"
import Favourite from "../Favourite/favourite";
const API = "https://fantasy.premierleague.com/api/bootstrap-static/";
const params = {
  _limit: 1,
};

class Player extends Component {
  state = {
    league: {
      events: [],
      // teams: [],
      elements: [],
      // element_stats: [],
      // element_types: [],
    },
    isLoading: false,
    fname: "",
    sname: "",
    cost: "",
    score: "",
    form: "",
    points: "",
    image: "",
  };

  componentDidMount() {
    this.setState({ isLaoding: true });
    axios
      .get(API, { params })
      .then((response) =>
        this.setState({ league: response.data, isLoading: false })
      );
  }
  addHandler(id) {
    console.log(id)
    const favlist = this.state.league.elements.find(
      (player) => player.id == id
    );
    this.setState({
      fname: favlist.first_name,
      sname: favlist.second_name,
      score: favlist.goals_scored,
      cost: favlist.now_cost,
      form: favlist.form,
      points: favlist.total_points,
      image: favlist.photo,
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading.....</p>;
    }
    return (
      <div>
        <Favourite
          fname={this.state.fname}
          sname={this.state.sname}
          score={this.state.score}
          cost={this.state.cost}
          form={this.state.form}
          points={this.state.points}
          image={this.state.image}
        />
        <Clubs include={this.addHandler} />
        <div>
          <h2>Player list</h2>
          <ul className="playerslist">
            {this.state.league.elements.map((items) => (
              <li className="player" key={items.id}>
                <h2>{items.first_name}</h2>
                <p>{items.second_name}</p>
                <p>{items.form}</p>
                <p>{items.now_cost}</p>
                <p>{items.goals_scored}</p>
                <p>{items.total_points}</p>
                <p>{items.creativity}</p>
                <img src={items.photo} />
                <div className="add" onClick={() => this.addHandler(items.id)}>
                  +{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div >
    );
  }
}

export default Player;
