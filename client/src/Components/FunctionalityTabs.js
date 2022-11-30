import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GlobeIcon from '@mui/icons-material/Public';
import MessageIcon from '@mui/icons-material/Email';
import FriendsIcon from '@mui/icons-material/People';

export default function FunctionalityTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" centered>
      <Tab icon={<MessageIcon />} aria-label="message" />
      <Tab icon={<GlobeIcon />} aria-label="globe" />
      <Tab icon={<FriendsIcon />} aria-label="friends" />
    </Tabs>
  );
}