import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CreateMessageButton } from './Anonymous Functionality/CreateMessageButton.js';
import GlobeIcon from '@mui/icons-material/Public';
import FriendsIcon from '@mui/icons-material/People';
import CreateLoginForm from './Authentication/LoginForm.js';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  //create state for user logged in
  const [loggedIn, isLoggedIn] = React.useState(false);
  const [username, setUser] = React.useState(null);
  const [nickname, setNickname] = React.useState(null);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pull_data = (data) => {
    setUser(data.username)
    setNickname(data.nickname)
    isLoggedIn(true) // LOGS DATA FROM CHILD 
  }

  return (

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'transparent' }}>
        <Tabs value={value} 
              borderColor="transparent"
              onChange={handleChange} 
              aria-label="basic tabs example">
          <Tab label="Friends" 
               icon={<FriendsIcon />} 
          {...a11yProps(0)} 
          />
          <Tab label="Random People" icon={<GlobeIcon />} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* {loggedIn ? <div>Logged in as {username} ({nickname})</div> : null} */}
        <CreateLoginForm func={pull_data}></CreateLoginForm>

      </TabPanel>
      <TabPanel value={value} index={1}>
        {CreateMessageButton()}
      </TabPanel>
    </Box>
  );
}