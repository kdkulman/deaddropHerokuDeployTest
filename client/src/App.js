import logo from './logo.svg';
import * as React from 'react';
import {CreateMessageTextField} from './Components/Basic Functionality/CreateMessageTextField.js';
import './CSS/App.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import { CreateMessageButton } from './Components/Basic Functionality/CreateMessageButton.js';  
import {fetchText} from './Components/Basic Functionality/SendMessageButton.js';

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

          </Grid>

          <Grid item xs={12} color='black'> {/* Jashans stuff*/}
            {CreateMessageButton()}
          </Grid>
          
          <Grid item xs={12} color='white'>
            {/* {createAnonymousLink()} */}
          </Grid>
        </Grid>
        </div>
      </main>
    </div>
  );
}

export default App;
