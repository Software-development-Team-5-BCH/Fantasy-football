import React, { Component } from "react";
import axios from "axios";
import "./Player.css";
import Favourite from "../Favourite/favourite";
import { firebase } from '../../firebase'
import MyTeam from '../MyTeam/MyTeam'
const API =
  "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/";
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
    user:null
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

    this.addToUserTeam(favlist)
  }

  async addToUserTeam(favlist){
    const db = firebase.firestore();
    let userId = firebase.auth().currentUser.uid
    let userInfo = await db.collection('users').doc(userId).get()
    if(!userInfo) return
    let data = userInfo.data()
    let updatedTeam = [...data.team,`${favlist.first_name} ${favlist.second_name} ${favlist.total_points}` ]
    let newData = {team: updatedTeam}    
    await db.collection('users').doc(userId).set(newData)
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
        {this.props.user && <MyTeam user={{...this.props.user}} />}
      </div>
    );
  }
}

export default Player;
