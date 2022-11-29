import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useState } from "react";
import { CreateMessageTextField } from './CreateMessageTextField.js';
import { SendMessageButton } from './SendMessageButton.js';

import ReactDOM from "react-dom/client";

export function CreateMessageButton() {

  const [showButton, setShowButton] = useState(true);

  if (showButton) {
    return (
        <div>
          <Fab color="black" 
                aria-label="add"
                onClick={() => setShowButton(false)}>
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
  } else {
    return (
      <div>
        <CreateMessageTextField />
        <SendMessageButton />
      </div>
    );
  }
}