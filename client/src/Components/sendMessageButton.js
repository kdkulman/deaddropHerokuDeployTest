import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

//Get text from message box and send to database
export function fetchText() {
    const message = 'cheese' //document.getElementById("createMessageTextField").value;
    console.log(message);

    //Send text to database post request
    fetch(`https://localhost:5555/storeMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text : message }),
    })
    .then((result) => result.text())
        .then((data) => {
            console.log(data);
        }
    )
    console.log("fetchText() called");


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