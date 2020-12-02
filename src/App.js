import logo from "./logo.svg";
import "./App.css";
import Player from "./Component/Player/Player";
import Table from "./Component/table/Table.js";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Fantasy Premier League</h1>
      <Player />
      <Table />
    </div>
  );
}

export default App;
