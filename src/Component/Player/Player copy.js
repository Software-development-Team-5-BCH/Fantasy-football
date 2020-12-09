import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Player.css';
import Favourite from '../Favourite/favourite'
  ;
const API = "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/";
const params = {
  _limit: 1,
}

const Player = () => {
  //get saved data from local storgae
  //const [myItem, setMyItem] = useState(JSON.parse(localStorage.get('favPlayer')) || {});
  const [myItem, setMyItem] = useState();
  //add data to local storage
  //const [item, setItem] = useState((localStorage.setItem('favPlayer', JSON.stringify(tablelist))) || {});
  const [item, setItem] = useState();
  const [isloading, setIsLoading] = useState(false);
  //state of table list
  const [myPlayers, setMyPlayers] = useState([])

  React.useEffect(() => {
    setIsLoading(true)
    axios.get(API)
      .then((res) => setMyItem(res.data), setIsLoading(false)).then(console.log(myItem));
  }, []);

  const addHandler = (id) => {
    let tablelist = [...myPlayers];
    const favlist = (myItem.elements.find((player) => player.id === id));
    tablelist.push(favlist);
    setMyPlayers(tablelist);
    console.log(tablelist)
  };



  return <>
    <h1> Hello </h1>
    <p onClick={() => addHandler}> Click me</p>

  </>
}

export default Player;