import React from "react";
import PropTypes from "prop-types";
import './Fixtures.css';

class Fixtures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: props.matches
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.matches !== prevProps.matches) {
      this.setState({
        matches: this.props.matches,
      });
    }
  }

  render() {
    const d = new Date(this.props.lastUpdate);
  
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      <ul className="fixtures">
        <h2>{this.props.league}</h2>
        {this.state.matches.map((el) => (
        <div className="results" key={el.id}>
            <div>Matchday: {el.matchday}</div>
            <div className="team">{el.homeTeam.name}</div>
            <div className="score">{el.score.fullTime.homeTeam}</div>
            <div className="team">{el.awayTeam.name}</div>
            <div className="score">{el.score.fullTime.awayTeam}</div>
            <div className="status">Match status: {el.status}</div>
        </div>
        ))}
        <li className="last-update">
          Last update:{" "}
          {`${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`}
        </li>
      </ul>
    );
  }
}

export default Fixtures;

Fixtures.propTypes = {
  league: PropTypes.string.isRequired,
  matches: PropTypes.array.isRequired,
  lastUpdate: PropTypes.string.isRequired,
};
