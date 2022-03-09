import React, { Component } from 'react';
import Logo from './view/components/Logo';
import './App.css';
import './style.css'
import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Flex-App-Container">
          <div className="Left-Banner" role="banner">
            
            <Logo className="Logo"/>
            a gauche
          </div>
          
          <div className="App-header">
              <div className="flex-container">
              <MainPage connect="connexion"/>
              <MainPage connect="peut etre"/>
              </div>
          </div>
          <div className="Left-Banner">
          a droite
          </div>
        </div>
      </div>
    );
  }
}

export default App;
