import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';

export function CreateAnonymousLink() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  // this is the button that will be clicked to show the snackbar
  // this will position the snackbar at the bottom left of the screen
  const buttons = (
    <React.Fragment>
      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Copy</Button>
      </React.Fragment>
  );

  // The messsage that will be displayed in the snackbar (the alert)
  return (
    <div>
      <Box
      sx={{
        // make a component that is 100% of the screen
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}

      // <Box sx={{ width: 500, height: 500, bgcolor: 'background.paper' }}>
    >
      <Paper
      elevation={4}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '50%',
          height: '100%',
        }}
    >
        {buttons}
    </Paper>
    </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Link copied to clipboard"
        key={vertical + horizontal}
      />
    </div>
  );
}