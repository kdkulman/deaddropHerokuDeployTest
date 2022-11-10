export async function fetchText() {
    let response = await fetch('http://dead-drop-app-web-service.herokuapp.com/')
    let responseJSON = await response.json();
    let data = JSON.parse(responseJSON);
    console.log(data);
        // .then(response => {
        //     let data = response.text();
        //     console.log(data);
        // })
        // .catch(error => {
        //     // handle the error
        // });
}