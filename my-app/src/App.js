import logo from './logo.svg';
import * as React from 'react';
import { createMessageComponent } from './Components/createMessageComponent.js';
import './App.css';
import Grid from '@mui/material/Grid'; // Grid version 1

//This will hold the layout for the project.
//We should be able to put conditional statements 
//To control which components are currently visible

function App() {
  return (
    <div className="App">
      <main>
        <Grid 
          container 
          spacing={0}
          justifyContent="space-around"
          alignItems="center">

          <Grid xs={12}>

          </Grid>
          <Grid xs={12}>
          <h1> LOGO </h1>
            
          </Grid>
          <Grid xs={12}>
          </Grid>

          <Grid xs={1}>
            {createMessageComponent()}
          </Grid>
        </Grid>
      </main>
    </div>

  );
}

export default App;
