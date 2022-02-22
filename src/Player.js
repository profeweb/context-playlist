import React, { Component } from 'react';
import Song from './Song.js';
import './App.css';


class Player extends Component {

  render() {
      return(
        <div>
          <h3> Player ...</h3>
          <Song />
        </div>
      );
  }
}

export default Player;