import React from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends React.Component {
  render() {
    return <p>hallo</p>
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <img src="aneta-ivanova-776.jpg" />
        <Text></Text>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
