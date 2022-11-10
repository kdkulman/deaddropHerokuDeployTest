export async function fetchText() {
    let response = await 
    fetch("https://dead-drop-app-web-service.herokuapp.com/")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        }
    );

    let data = await response.text();
    console.log(data);
}

