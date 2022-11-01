import * as React from 'react';
import { TextField } from '@mui/material';

export function createMessageTextField() {
    return (
        
        <TextField  id="outlined-basic" 
                    label="Enter message" 
                    aria-label='empty textarea'
                    variant="outlined" 
                    style={{ backgroundColor: 'white' }
                }
                    // I couldn't figure out how to make the bg white
                    // in the CSS file, so I did it here -Kevin
        />
    )
}