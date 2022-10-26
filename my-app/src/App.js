import logo from './logo.svg';
import * as React from 'react';
import { createMessageComponent } from './createMessageComponent.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      </header>
      {createMessageComponent()}

    </div>
  );
}

export default App;
