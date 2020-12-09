import logo from './logo.svg';
import './App.css';
import Player from './Component/Player/Player';
import Club from './Component/Club/Club'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Fantasy Premier League</h1>
      <Club />
      <Player />

    </div>
  );
}

export default App;
