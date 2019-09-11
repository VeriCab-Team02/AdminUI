import React from 'react';

import './App.css';
import Navigation from './Navigation/Navigation.react';
import Drivers from './Drivers/Drivers.react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faPersonBooth } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">


<div className="header">
                <div className="jumbotron">
                 
                  <div className="icon">
                  <FontAwesomeIcon icon={faPersonBooth} size="3x"/>
                  </div>
                  <div className="text">
                  <p>WELCOME ADMIN</p>
                  </div>
                </div>
            </div>
      <Drivers></Drivers>
      <br/>
      <div className="navigation">
      <Navigation></Navigation>
    </div>




    </div>
    
  );
}

export default App;
