import * as React from 'react';
import TextareaAutosize from '@mui/material/Button';
import { TextField } from '@mui/material';

export function createMessageComponent() {
    return (
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                style={{ width: 200 }}>
                    Hello mom
            </TextareaAutosize>
        </div>
    )
}