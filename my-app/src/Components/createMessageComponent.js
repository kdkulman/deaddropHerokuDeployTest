import * as React from 'react';
import TextareaAutosize from '@mui/material/Button';
import { TextField } from '@mui/material';

export function createMessageComponent() {
    return (
        <div>
            <TextField id="outlined-basic" label="Outlined" aria-label='empty textarea'
             variant="outlined" />

        </div>
    )
}