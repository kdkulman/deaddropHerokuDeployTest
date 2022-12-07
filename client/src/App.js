import logo from './logo.svg';
import * as React from 'react';
import './CSS/App.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import { CreateMessageButton } from './Components/Basic Functionality/CreateMessageButton.js';  
import { PrimaryAppBar } from './Components/PrimaryAppBar.js';
import { useState } from "react";
import FunctionalityTabs from './Components/FunctionalityTabs';
import { CreateAnonymousLink } from './Components/Basic Functionality/CreateAnonymousLink.js';
import { CreateFreindsList } from './Components/Basic Functionality/CreateFriendsList';
import { CreateLoginForm } from './Components/Basic Functionality/CreateLoginForm';
import { TextField } from '@mui/material';
import { CreateFriendsRequestList } from './Components/Basic Functionality/CreateFriendsRequestList';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  return (    
    <div className="App">
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
          <Grid item xs={12} color='white'>
          </Grid>

          <Grid item xs={12} color='black'> {/* Jashans stuff*/}
            {CreateMessageButton()}
          </Grid>
          
          <Grid item xs={12} color='white'> {/* Jashans stuff*/}
            {CreateAnonymousLink()}
          </Grid>

          <Grid item xs={12} color='black'> {/* Jashans stuff*/}
          {CreateFreindsList()}
          </Grid>

          <Grid item xs={12} color='white'> {/* Jashans stuff*/}
            {CreateLoginForm()}
          </Grid>

        </Grid>
        </div>
      </main>
    </div>
  );
}

export default App;
