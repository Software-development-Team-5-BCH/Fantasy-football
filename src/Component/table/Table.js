import React, { Component } from 'react';
import axios from 'axios';
import './table.css';
  

const API = "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/";
const params = {
  _limit: 1,
}

class Table extends Component {
    state = {
        teams: [],
        points:  0,
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
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get(API, { params })
          .then((response) => this.setState({ league: response.data, isLoading: false }));
      }

      addHandler(id) {
        const clubName = this.state.league.elements.find((player) => player.id == id);
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

    }
}