import * as React from 'react';
import { TextField } from '@mui/material';


export function createMessageTextField() {
    return (
        
        <TextField  id="createMessageTextField" 
                    label="Enter message" 
                    aria-label='empty textarea'
                    variant="outlined" 
                    style={{ backgroundColor: 'white' }
                }

        />
    )
}