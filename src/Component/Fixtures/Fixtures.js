import React, { Component } from 'react';
import axios from "axios";
import "./Fixtures.css";

const API = "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/fixtures/";
const params = {
    _limit: 1,
}



class Fixtures extends Component {
  state = {
			fixtures: [],
			isLoading: false,
		};

componentDidMount() {
    this.setState({ isLoading: true });
    axios
        .get(API, { params })
        .then((response) =>
        this.setState({ fixtures: response.data, isLoading: false })
    );					
}

		render() {
			if (this.state.isLoading) {
				return <p>Loading page...</p>
			}

			return (
        <div>
          <h1>Fixtures</h1>
						<ul className="fixtures">
							{this.state.fixtures.map((items) => (
								<li className="results" key={items.id}>
									<div className="event"><h3>Week</h3><p>{items.event}</p></div>
									<div className="team_a"><h3>Away Team</h3><p>{items.team_a}</p></div>
									<div className="team_a_score"><h3>Away Score</h3><p>{items.team_a_score}</p></div>
									<div className="team_h"><h3>Home Team</h3><p>{items.team_h}</p></div>
									<div className="team_h_score"><h3>Home Score</h3><p>{items.team_h_score}</p></div>
								</li>
							))}
							</ul>
        </div>
        );
    }
}

export default Fixtures;