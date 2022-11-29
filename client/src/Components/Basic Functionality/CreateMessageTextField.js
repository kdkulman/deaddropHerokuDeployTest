import * as React from 'react';
import { TextField } from '@mui/material';
import { useState } from "react";


export function CreateMessageTextField() {
    const [showButton, setShowButton] = useState(true);

    if (showButton) {
        return (
        
            <TextField  id="CreateMessageTextField" 
                        label="Enter super secret message" 
                        aria-label='empty textarea'
                        variant="outlined" 
                        style={{ backgroundColor: 'white' }}
            />
        )
    } else {
        return null;
    }
}