

export async function fetchFriendRequestList(username) {
    console.log("username: " + username);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:5001');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
  
    let response = await fetch(`https://dead-drop-app-web-service.herokuapp.com/getFriendRequests`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        currUser: username,
      })
    });
  
    return await response.json().then((data) => {  
        return data.friendRequestsList;
    });
  } 