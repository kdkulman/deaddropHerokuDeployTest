import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function CreateLoginForm(props) {

    async function createAccount() {
        let username = document.getElementById("usernameTextField").value;
        let password = document.getElementById("passwordTextField").value;
        let nickname = document.getElementById("nicknameTextField").value;
    
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:5001');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('GET', 'POST', 'OPTIONS');
        
        const response = await fetch(`https://dead-drop-app-web-service.herokuapp.com/storeUser`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(
                { 
                    "username" : username,
                    "password" : password,
                    "nickname" : nickname
                }
            )
        });
        if (response.status === 200) {
            return await response.json().then((data) => {
                props.pull_data(data);
                return JSON.stringify(data);
            });
        }
    }


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="usernameTextField" label="Username" variant="outlined" />
            <TextField id="passwordTextField" label="Password" variant="outlined" />
            <TextField id="nicknameTextField" label="Nickname" variant="outlined" />
            <Button variant="contained">Login</Button>
            <Button 
                variant="contained"
                onClick={async () => {
                    await createAccount();
                }}>
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

