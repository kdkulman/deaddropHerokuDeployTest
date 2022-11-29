import * as React from 'react';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import { CreateMessageButton } from './CreateMessageButton';
import { CreateMessageTextField } from './CreateMessageTextField';


//Get text from message box and send to database
export function fetchText() {
    let message = document.getElementById("CreateMessageTextField").value;

    console.log(message);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    
    fetch(`https://dead-drop-app-web-service.herokuapp.com/storeMessage`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ "text" : message })
    }).then(response => {
        document.getElementById("CreateMessageTextField").value = "";        
        console.log(response);
    }).catch(error => {
        console.log(error);
    }
    );

    if (message == "") {
        alert("Please enter a message");
        return true;
    } else {
        return false;
    }

}

export function SendMessageButton() {
    const [showButton, setShowButton] = useState(true);

    if (showButton) {
        return (
                <div>
                    <IconButton aria-label="send" 
                                size="large"
                                onClick={() => {
                                    let success = fetchText();
                                    setShowButton(success);
                                }}>
                        <SendIcon fontSize="large" />
                    </IconButton>

                    <TextField  id="CreateMessageTextField" 
                                label="Enter super secret message" 
                                aria-label='empty textarea'
                                variant="outlined" 
                                style={{ backgroundColor: 'white' }}/>
                </div>
        )
    
    } else {
        return (
            <div>
                <CreateMessageButton />
            </div>
        )
    }
}