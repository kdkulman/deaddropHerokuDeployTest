import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
//import FriendRequestListItem from './FriendRequestListItem';
import { fetchFriendList } from './fetchFriendList';
import MessageIcon from '@mui/icons-material/Message';
import { CreateMessageList } from './CreateMessageList';


export function CreateFriendList({user}) {
  const [username, setUsername] = React.useState(user);
  const [friendList, setFriendList] = React.useState(null);
  const [sender, setSender] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const friendList = await fetchFriendList(username);
      setFriendList(friendList);
      //convert friendRequests to array      
      console.log(friendList);
      
    }
    fetchData();
  }
  , [username]);

  const messageListHtml = (sender) => {
    if (sender != null) {
      return (
        <CreateMessageList sender={sender} username={username} />
      ) 
    }
  }


  if (friendList == null) {
    return (
      <Box>
        <h1>Loading...</h1>
      </Box>
    );
  } else {
    //{friendList.at(0)}

    //create a FriendRequestListItem for each friend request in friendRequests
    //return a list of FriendRequestListItems
    
    return (
        <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <h1>Friend List</h1>
          {friendList.map((friend) => (
            <ListItem>
              <ListItemText primary={friend} />
              <Button variant="contained"
                      onClick={ () => 
                        setSender(friend)
                      }>
                <MessageIcon />
              </Button>
            </ListItem>
        ))}
        </List>
        {messageListHtml(sender)} 
      </div>
    );
  }
}





// THIS CODE IS GOING TO NEED A EXPORT CREATEALLFRIENDS, CREATEPENDINGFRIENDS, CREATEADDNEWFRIENDS AND CREATEBLOCKEDFRIENDS
// AND THEN WE WILL HAVE TO IMPORT THEM INTO THE FRIENDS PAGE AND THEN RENDER THEM THERE

// WE WILL NEED TO MAKE BUTTONS FOR EACH OF THE FRIENDS AND THEN WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO ADD A FRIEND
// AND THEN WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO BLOCK A FRIEND

// WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO ADD A FRIEND

// WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO BLOCK A FRIEND
