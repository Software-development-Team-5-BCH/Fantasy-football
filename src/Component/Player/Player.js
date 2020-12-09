import React, { Component } from 'react';
import axios from 'axios';
import './Player.css';
import Favourite from '../Favourite/favourite'
  ;
const API = "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/";
const params = {
  _limit: 1,
}
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

    fname: '',
    sname: '',
    cost: '',
    score: '',
    form: '',
    points: '',
    image: '',

  }

  componentDidMount() {

    this.setState({ isLaoding: true });
    axios.get(API, { params })
      .then((response) => this.setState({ league: response.data, isLoading: false }));
    // const data = axios.get(API, { params })
    //   .then((res => res.json()))

    // console.log(data)
    // localStorage.setItem("mydata", JSON.stringify(data));
    // let getData = JSON.parse(localStorage.getItem('mydata'));
    // this.setState({ league: getData })

  }


  addHandler(id) {
    let tablelist = [];
    const favlist = JSON.stringify(this.state.league.elements.find((player) => player.id == id));
    console.log(favlist)
    localStorage.setItem('player', favlist);
    let detail = JSON.parse(localStorage.getItem("player"))
    console.log(detail)
    const data = this.setState({
      fname: detail.first_name,
      sname: detail.second_name,
      score: detail.goals_scored,
      cost: detail.now_cost,
      form: detail.form,
      points: detail.total_points,
      image: detail.photo,
    });
    tablelist.push(data);
    console.log(tablelist)
  }




  render() {
    if (this.state.isLoading) { return <p>Loading.....</p> }
    return (
      <div>
        <Favourite
          fname={this.state.fname}
          sname={this.state.sname}
          score={this.state.score}
          cost={this.state.cost}
          form={this.state.form}
          points={this.state.points}
          image={this.state.image} />

        <div>
          <h2>Player list</h2>
          <ul className="playerslist">{this.state.league.elements.map((items) =>
            (<li className="player" key={items.id}>
              <h2>{items.first_name}</h2>
              <p>{items.second_name}</p>
              <p>{items.form}</p>
              <p>{items.now_cost}</p>
              <p>{items.goals_scored}</p>
              <p>{items.total_points}</p>
              <p>{items.creativity}</p>
              <img src={items.photo} alt={items.fname} />
              <div className="add" onClick={() => this.addHandler(items.id)}>+ </div>
            </li>)
          )}</ul>
        </div>
      </div>
    );
  }
}


export default Player;