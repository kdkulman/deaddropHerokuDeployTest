import logo from './logo.svg';
import * as React from 'react';
import {createMessageTextField} from './Components/createMessageTextField.js';
import './CSS/App.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import { sendMessageButton } from './Components/sendMessageButton.js';
import { createMessageButton } from './Components/createMessageButton.js';  
import {fetchText} from './Components/sendMessageButton.js';

function App() {
  return (
    <div className="App">
      <main>
        <div>
        <Grid 
          container 
          spacing={0}
          justifyContent="space-around"
          alignItems="center">
          <Grid item xs={12}>
          </Grid>

          <Grid item xs={12} color='white'>
            {createMessageTextField()}
            {sendMessageButton()}
          </Grid>

          <Grid item xs={12} color='black'> {/* Jashans stuff*/}
          {createMessageButton()}
          </Grid>
          
          <Grid item xs={12} color='white'>
            {createAnonymousLink()}
          </Grid>
        </Grid>
        </div>
      </main>
    </div>
  );
}

export default App;
