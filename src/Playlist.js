import React, { Component } from 'react';
import Player from './Player.js';
import './App.css';

class Playlist extends Component {

  	render() {
  		return(
  			<div>
  				<h2>PlayList ...</h2>
  				<Player />
  			</div>
  		);
  	}

}

export default Playlist;