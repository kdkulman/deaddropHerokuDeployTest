export function fetchText() {
    fetch('https://dead-drop-app-web-service.herokuapp.com/')
        .then((response) => response.json())
            .then((data) => console.log(data));
}