export function fetchText() {
    fetch(`http://localhost:5000/`)
    .then((result) => result.text())
    .then((data) => {
        console.log(data);
    })

}