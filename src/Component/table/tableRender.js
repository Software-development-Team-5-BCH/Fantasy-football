import React from "react"
import Api from "../lib/api";
import Table from "./Table";

class League extends React.Component {
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
    if (this.props.match.params.country !== prevProps.match.params.country) {
      Api(this.getFetchUrl()).then((data) => this.setState({ data }));
    }
  }

  render() {
    if (!this.state.data) {
      return <div className="loading">Data Loading...</div>;
    }

    return (
      <Table
        league={this.state.data.competition.name}
        standings={this.state.data.standings}
        lastUpdate={this.state.data.competition.lastUpdated}
      />
    );
  }

  getFetchUrl() {
    const url = `http://api.football-data.org/v2/competitions/PL/standings/`;

    return url;
  }
}

export default League;
