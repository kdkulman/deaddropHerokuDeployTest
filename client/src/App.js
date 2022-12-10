import logo from './logo.png';
// import logo2 from './logo.svg';
import * as React from 'react';
import './CSS/App.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import { CreateMessageButton } from './Components/Basic Functionality/CreateMessageButton.js';  
import { PrimaryAppBar } from './Components/PrimaryAppBar.js';
import { useState } from "react";
import FunctionalityTabs from './Components/FunctionalityTabs';
import { CreateFriendRequestList} from './Components/Basic Functionality/CreateFriendRequestList';
import { CreateLoginForm } from './Components/Basic Functionality/CreateLoginForm';
import { TextField } from '@mui/material';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  return (    
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" width = "50%" height = "50%"/>
      <PrimaryAppBar />
      <FunctionalityTabs />

      <main>
        <div>
        <Grid 
          
          container 
          spacing={0}
          justifyContent="space-around"
          alignItems="center">
          <Grid item xs={12}>

          </Grid>
          <Grid id="AppGridLayout" item xs={12} color='white'>
          </Grid>

          <Grid item xs={12} color='black'> {/* Jashans stuff*/}
          </Grid>
          
          <Grid item xs={12} color='white'> {/* Jashans stuff*/}
          </Grid>
          
          <Grid item xs={12} color='white'> {/* Jashans stuff*/}
            {/* {CreateLoginForm()} */}
          </Grid>

        </Grid>
        </div>
      </main>
    </div>
  );
}

export default App;
