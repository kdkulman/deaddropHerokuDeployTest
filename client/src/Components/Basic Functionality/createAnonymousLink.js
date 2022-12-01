import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

export function CreateAnonymousLink() {
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState('');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 500,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          id="outlined-basic"
          label="Enter a link"
          variant="outlined"
          value={link}
          onChange={handleLinkChange}
        />
        <Button variant="contained" onClick={handleClick}>
          Create Anonymous Link
        </Button>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Link created successfully"
        action={
          <>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </Box>
  );
}

  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
    
  //   setOpen(false);
  // };

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <TextField
//           id="outlined-basic"
//           label="Outlined"
//           variant="outlined"
//           sx={{ width: '100%' }}
//         />
//         <Button variant="contained" onClick={handleClick} sx={{ mt: 2 }}>
//           Create Anonymous Link
//         </Button>
//         <Snackbar
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left',
//           }}
//           open={open}
//           autoHideDuration={6000}
//           onClose={handleClose}
//           message="Link created successfully"
//           action={
//             <React.Fragment>
//               <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
//                 <CloseIcon fontSize="small" />
//               </IconButton>
//             </React.Fragment>
//           }
//         />
//       </Paper>
//     </Box>
//   );
// }


//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ p: 2, my: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <Button variant="contained" onClick={handleClick}>Copy Anonymous Link</Button>
//         <Snackbar
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left',
//           }}
//           open={open}
//           autoHideDuration={6000}
//           onClose={handleClose}
//           message="Link copied to clipboard"
//           action={
//             <React.Fragment>
//               <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
//                 <CloseIcon fontSize="small" />
//               </IconButton>
//             </React.Fragment>
//           }
//         />
//       </Paper>
//     </Box>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function HelperTextAligned() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         '& > :not(style)': { m: 1 },
//       }}
//     >
//       <TextField
//         helperText="Please enter your name"
//         id="demo-helper-text-aligned"
//         label="Name"
//       />
//       <TextField
//         helperText=" "
//         id="demo-helper-text-aligned-no-helper"
//         label="Name"
//       />
//     </Box>
//   );
// }


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