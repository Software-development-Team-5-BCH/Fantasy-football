import React, { Component } from 'react';
import './favourite.css';

const Favourite = ({ fname, sname, score, cost, form, points, image }) => {
  return (<div className="fav-list">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Cost</th>
          <th>Form</th>
          <th>Points</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <th>{fname} {sname}</th>
          <th>{score}</th>
          <th>{cost}</th>
          <th>{form}</th>
          <th>{points}</th>
          <th><img src={image} /></th>
        </tr>
      </tbody>
    </table>

  </div >

  );
};



export default Favourite;