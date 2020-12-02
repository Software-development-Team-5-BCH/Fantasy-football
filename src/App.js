import './App.css';
import Header from './Component/Header/Header'
import Player from './Component/Player/Player';
import firebaseAuth  from './firebase';

function App(props) {

  const {
    user,
    signOut,
    signInWithGoogle,
  } = props

  return (
    <div className="App">
      <Header 
        user={user} 
        signOut={signOut} 
        signInWithGoogle={signInWithGoogle}
      />
      <h1>Welcome to Fantasy Premier League</h1>
      <Player />
    </div>
  );
}

export default firebaseAuth(App);