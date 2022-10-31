import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

export function sendMessageButton() {
    return (

        <IconButton aria-label="send" 
                    size="large"
                    onClick={console.log("Send message to database")}>
            <SendIcon fontSize="large" />
        </IconButton>
    )
}