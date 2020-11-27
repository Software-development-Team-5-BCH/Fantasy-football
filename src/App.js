import './App.css';
import Header from './Component/Header/Header'
import Player from './Component/Player/Player';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Welcome to Fantasy Premier League</h1>
      <Player />
    </div>
  );
}

export default App;
