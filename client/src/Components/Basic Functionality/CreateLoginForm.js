import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export function CreateLoginForm() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <TextField id="outlined-basic" label="Nickname" variant="outlined" />
            <Button variant="contained">Login</Button>
            <Button variant="contained">
              Create Account

              {/* <form name="myForm" id="myForm" onsubmit="return validateForm()">
                Pets: <br />
                <input type="text" id="Username" />
                <input type="button" id="Password" value="Create" />
                <br/>
                </form> THIS CODE IS GONNA BE USED LATER ON WHEN WE HIT CREATE ACCOUNT IT WILL TAKE 
                US TO A NEW PAGE AND THERE WE CAN ENTER THE CREDENTIALS FOR THE NEW ACCOUNT INFO*/}
            </Button>
        </Box>
    );
}
