import React, { Component } from 'react';
import {AppContext} from './AppProvider.js';

import './App.css';

class Song extends Component {

  	render() {
  		return(
  			<div>
  				{/* Consumeix o Accedeix al contexte */}
  				<AppContext.Consumer>
  					{(context) => (
  						<p>{context.info.song.title} by
  						 {context.info.song.artist} 
  						 ({context.info.song.released})
  						 </p>
  						)}
  				</AppContext.Consumer>
  			</div>
  		);
  	}

}

export default Song;