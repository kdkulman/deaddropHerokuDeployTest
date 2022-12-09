import * as React from 'react';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import { CreateMessageButton } from './CreateMessageButton';
import { CreateAnonymousLink } from './CreateAnonymousLink';
//body parser
//Get text from message box and send to database

export async function fetchText() {
    let message = document.getElementById("CreateMessageTextField").value;
    let sender = "";
    let recipient = "";
    let country = "";

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:5001');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    
    const response = await fetch(`https://dead-drop-app-web-service.herokuapp.com/storeMessage`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(
            { 
                "text" : message,
                "sender" : sender,
                "recipient" : recipient,
                "country" : country
            }
        )
    });
    
    if (message == "") {
        alert("Please enter a message");
        return null;
    } else {
        return await response.json().then((data) => {
            console.log("response: " + response);
            console.log("response.json: " + response.json());
            console.log("data: " + data.url);
            return JSON.stringify(data.url);
            
        });
    }
}

export function SendMessageButton() {
    const [url, isMessageCreated] = useState("");

    if (url == "") {
        return (
                <div>
                    <TextField  id="CreateMessageTextField" 
                                label="Enter super secret message" 
                                aria-label='empty textarea'
                                variant="outlined" 
                                style={{ backgroundColor: 'white' }}/>
                    <IconButton aria-label="send" 
                                size="large"
                                onClick={async () => {
                                    let success = await fetchText();
                                    if (success != null) isMessageCreated(success);
                                    console.log("url: " + success);

                                }}>
                        <SendIcon fontSize="large" />
                    </IconButton>
                </div>
        )
    } else {
        return (
            <div>
                <CreateAnonymousLink url={url}/>
            </div>
        )
    }
}