import * as React from 'react';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { CreateMessageButton } from './CreateMessageButton';


//Get text from message box and send to database
export function fetchText() {
    let message = document.getElementById("CreateMessageTextField").value;
    if (message == "") {
        alert("Please enter a message");
        return;
    }
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
        
        //update the state for SendMesssageButton here sometime when i become undumb
        
        console.log(response);
    }).catch(error => {
        console.log(error);
    }
    );


}

export function SendMessageButton() {
    const [showButton, setShowButton] = useState(true);

    if (showButton) {
        return (

            <IconButton aria-label="send" 
                        size="large"
                        onClick={fetchText}>
                <SendIcon fontSize="large" />
            </IconButton>
        )
    
    } else {
        return (
            <div>
                <CreateMessageButton />
            </div>
        )
    }
}