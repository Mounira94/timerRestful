import React, { Component } from 'react';
import './App.css';
import Text from './Components/Text';
import Time from './Components/Time';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Time />
         <Text/>
      </div>
    );
  }
}

export default App;
