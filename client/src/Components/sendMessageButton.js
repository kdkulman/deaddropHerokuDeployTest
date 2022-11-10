import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { fetchText } from '../BackEndFunctionsSQL/testFetch';

export function sendMessageButton() {
    return (

        <IconButton aria-label="send" 
                    size="large"
                    onClick={fetchText}>
            <SendIcon fontSize="large" />
        </IconButton>
    )
}