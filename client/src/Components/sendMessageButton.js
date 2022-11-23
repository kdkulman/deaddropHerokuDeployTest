import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';


//Get text from message box and send to database
export function fetchText() {
    let message = document.getElementById("createMessageTextField").value;
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
        document.getElementById("createMessageTextField").value = "";
        console.log(response);
    }).catch(error => {
        console.log(error);
    }
    );

}

export function sendMessageButton() {
    console.log("sendMessageButton() called");
    return (

        <IconButton aria-label="send" 
                    size="large"
                    onClick={fetchText}>
            <SendIcon fontSize="large" />
        </IconButton>
    )
}