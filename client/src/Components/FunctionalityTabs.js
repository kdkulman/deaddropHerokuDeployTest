import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CreateMessageButton } from './Basic Functionality/CreateMessageButton.js';
import GlobeIcon from '@mui/icons-material/Public';
import MessageIcon from '@mui/icons-material/Email';
import FriendsIcon from '@mui/icons-material/People';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //put create message button under id AppGridLayout
  return (

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'transparent' }}>
        <Tabs value={value} 
              borderColor="transparent"
              onChange={handleChange} 
              aria-label="basic tabs example">
          <Tab label="Friends" icon={<FriendsIcon />} {...a11yProps(0)} />
          <Tab label="Random People" icon={<GlobeIcon />} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {CreateMessageButton()}
      </TabPanel>
    </Box>
  );
}


// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import GlobeIcon from '@mui/icons-material/Public';
// import MessageIcon from '@mui/icons-material/Email';
// import FriendsIcon from '@mui/icons-material/People';
// import { CreateMessageButton } from './Basic Functionality/CreateMessageButton';

// export default function FunctionalityTabs() {
//   //create tabs for each functionality with content when you switch tabs
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   }

//   //create enums for each tab
//   const TABS = {
//     FRIENDS: 0,
//     RANDOM: 1,
//   }

//   return (
//     <Tabs
//       value={value}
//       onChange={handleChange}
//       indicatorColor="primary"
//       textColor="primary"
//       centered
//     >
//       <Tab label="Friends" icon={<FriendsIcon />}>
        
//       </Tab>
//       <Tab label="Random People" icon={<GlobeIcon />} >

//         <div>{CreateMessageButton()}</div>
//       </Tab>
//     </Tabs>
    
    
//   );



// }