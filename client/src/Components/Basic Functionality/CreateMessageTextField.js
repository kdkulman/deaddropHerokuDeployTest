import * as React from 'react';
import { TextField } from '@mui/material';


export function CreateMessageTextField() {
    return (
        
        <TextField  id="CreateMessageTextField" 
                    label="Enter super secret message" 
                    aria-label='empty textarea'
                    variant="outlined" 
                    style={{ backgroundColor: 'white' }}
        />
    )
}