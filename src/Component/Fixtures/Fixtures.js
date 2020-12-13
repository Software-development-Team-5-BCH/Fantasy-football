import React from "react";
import PropTypes from "prop-types";

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
        <li className="results">{this.props.league}</li>
        {this.state.matches.map((el) => (
          <li key={el.homeTeam.name} className="table-row">
            <ul>
              <li key="0" className="pos">
                {el.score.fullTime.homeTeam}
              </li>
              <li key="1">
              {el.awayTeam.name}
              </li>
              <li key="2">{el.score.fullTime.awayTeam}</li>
            </ul>
          </li>
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
