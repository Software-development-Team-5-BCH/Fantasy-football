import React from "react";
import Api from "../lib/api";
import Fixtures from "./Fixtures";

class FixturesRender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    Api(this.getFetchUrl()).then((data) => this.setState({ data }));
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.country !== prevProps.match.country) {
      Api(this.getFetchUrl()).then((data) => this.setState({ data }));
    }
  }

  render() {
    if (!this.state.data) {
      return <div className="loading">Data Loading...</div>;
    }

    return (
      <Fixtures
        league={this.state.data.competition.name}
        matches={this.state.data.matches}
        lastUpdate={this.state.data.competition.lastUpdated}
      />
    );
  }

  getFetchUrl() {
    const url = `https://api.football-data.org/v2/competitions/2021/matches`;

    return url;
  }
}

export default FixturesRender;
