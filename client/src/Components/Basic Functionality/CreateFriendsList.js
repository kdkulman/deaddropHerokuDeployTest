import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export function CreateFriendsList() {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Jashan"
          secondary="Online"
        />
        <Button variant="contained">
          <CheckIcon />
        </Button>
        <Button variant="contained">
          <ClearIcon />
        </Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Travis Howard"
          secondary="Online"
        />
        <Button variant="contained">
          <CheckIcon />
        </Button>
        <Button variant="contained">
          <ClearIcon />
        </Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Cindy Baker"
          secondary="Online"
        />
        <Button variant="contained">
          <CheckIcon />
        </Button>
        <Button variant="contained">
          <ClearIcon />
        </Button>
      </ListItem>
    </List>
  );
}

// THIS CODE IS GOING TO NEED A EXPORT CREATEALLFRIENDS, CREATEPENDINGFRIENDS, CREATEADDNEWFRIENDS AND CREATEBLOCKEDFRIENDS
// AND THEN WE WILL HAVE TO IMPORT THEM INTO THE FRIENDS PAGE AND THEN RENDER THEM THERE

// WE WILL NEED TO MAKE BUTTONS FOR EACH OF THE FRIENDS AND THEN WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO ADD A FRIEND
// AND THEN WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO BLOCK A FRIEND

// WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO ADD A FRIEND

// WE WILL NEED TO MAKE A FUNCTION THAT WILL ALLOW US TO BLOCK A FRIEND
