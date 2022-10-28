import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';

export function createMessageComponent() {
    return (
        <div>
        <TextField  id="outlined-basic" 
                    label="Enter message" 
                    aria-label='empty textarea'
                    variant="outlined" 
                    style={{ backgroundColor: 'white' }}
                    // I couldn't figure out how to make the bg white
                    // in the CSS file -Kevin
        />

        <IconButton aria-label="send" size="large">
            <SendIcon fontSize="large" />
        </IconButton>
        </div>
    )
}