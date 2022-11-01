import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
// import {createMessageTextField} from './Components/createMessageTextField.js';

export function createMessageButton() {
    return (
        <div>
          <Fab color="black" aria-label="add">
            <AddIcon />
            
          </Fab>
          <style>
            {`
              .MuiFab-root {
                position: fixed;
                bottom: 20px;
                right: 20px;
              }
            `}
          </style>
        </div>
      );
}
