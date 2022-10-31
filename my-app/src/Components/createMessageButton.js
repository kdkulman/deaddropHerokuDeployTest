import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

export function createMessageButton() {
    return (
        <div>
          <Fab onClick={createMessageTextField()} color="red" aria-label="add">
            
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
