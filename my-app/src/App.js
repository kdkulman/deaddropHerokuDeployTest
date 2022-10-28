import logo from './logo.svg';
import * as React from 'react';
import { createMessageComponent } from './Components/createMessageComponent.js';
import './CSS/App.css';
import Grid from '@mui/material/Grid'; // Grid version 1

//This will hold the layout for the project.
//We should be able to put conditional statements 
//To control which components are currently visible

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
            <h1> LOGO </h1>
          </Grid>

          <Grid item xs={12} color='white'>
            {createMessageComponent()}
          </Grid>

          <Grid item xs={12}>
          </Grid>
        </Grid>
        </div>
      </main>
    </div>
  );
}

export default App;
