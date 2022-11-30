import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export function CreateAnonymousLink() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ p: 2, my: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button variant="contained" onClick={handleClick}>Copy Anonymous Link</Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Link copied to clipboard"
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </Paper>
    </Box>
  );
}


  // const [state, setState] = React.useState({
  //   open: false,
  //   vertical: 'bottom',
  //   horizontal: 'center',
  // });

  // const { vertical, horizontal, open } = state;

  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };

  // const handleClose = () => {
  //   setState({ ...state, open: false });
  // };

  // // this is the button that will be clicked to show the snackbar
  // // this will position the snackbar at the bottom left of the screen
  // const buttons = (
  //   <React.Fragment>
  //     <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Copy</Button>
  //     </React.Fragment>
  // );

//   // The messsage that will be displayed in the snackbar (the alert)
//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//         <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
//           <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper' }}>
//             <Box sx={{ p: 1, flexGrow: 1, bgcolor: 'grey.300' }}>
//               <div>
//                 <p>https://dead-drop-app-web-service.herokuapp.com/anonymousLink</p>
//               </div>
//             </Box>
//             <Box sx={{ p: 1 }}>{buttons}</Box>
//           </Box>
//         </Paper>
//       </Box>
//       <Snackbar
//         anchorOrigin={{ vertical, horizontal }}
//         open={open}
//         onClose={handleClose}
//         message="Link copied to clipboard"
//         key={vertical + horizontal}
//         action={
//           <React.Fragment>
//             <Button color="secondary" size="small" onClick={handleClose}>
//               Close
//             </Button>
//             <IconButton
//               size="small"
//               aria-label="close"
//               color="inherit"
//               onClick={handleClose}
//             >
//               <CloseIcon fontSize="small" />
//             </IconButton>
//           </React.Fragment>
//         }
//       />
//     </div>
//   );
// }

//       <Box
//       sx={{
//         // make a component that is 100% of the screen
//         width: '25%',
//         height: '50%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Paper
//       elevation={4}
//         sx={{
//           p: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           width: '25%',
//           height: '50%',
//         }}
//     >
//         {buttons}
//     </Paper>
//     </Box>
//       <Snackbar
//         anchorOrigin={{ vertical, horizontal }}
//         open={open}
//         onClose={handleClose}
//         message="Link copied to clipboard"
//         key={vertical + horizontal}
//       />
//     </div>
//   );
// }