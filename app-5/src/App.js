import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './images'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Images ssbu={'https://cdn.vox-cdn.com/thumbor/zrBkG1Y_sIz_QIFifbTdMlAp3HI=/0x0:2400x1517/2070x1164/filters:focal(1008x567:1392x951):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60149789/smash_illo.0.jpg'} />
      </div>
    );
  }
}
export default App;
