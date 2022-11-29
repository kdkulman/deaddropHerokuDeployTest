import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { createAnonymousLink } from './createMessageTextField';

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  // Creates snackbar at the bottom center of the page.
  // Here we might be able to use this in order to add a link to it
  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'center',
        })}
      >
        Bottom-Center
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Link: "
        key={vertical + horizontal}
      />
    </div>
  );
}

// This code below will be able to slide the message up from the bottom of the page and display the link

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import Fade from '@mui/material/Fade';
// import Slide from '@mui/material/Slide';
// import Grow from '@mui/material/Grow';

// function SlideTransition(props) {
//   return <Slide {...props} direction="up" />;
// }

// function GrowTransition(props) {
//   return <Grow {...props} />;
// }

// export default function TransitionsSnackbar() {
//   const [state, setState] = React.useState({
//     open: false,
//     Transition: Fade,
//   });

//   const handleClick = (Transition) => () => {
//     setState({
//       open: true,
//       Transition,
//     });
//   };

//   const handleClose = () => {
//     setState({
//       ...state,
//       open: false,
//     });
//   };

//   return (
//     <div>
//       <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
//       <Button onClick={handleClick(Fade)}>Fade Transition</Button>
//       <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
//       <Snackbar
//         open={state.open}
//         onClose={handleClose}
//         TransitionComponent={state.Transition}
//         message="I love snacks"
//         key={state.Transition.name}
//       />
//     </div>
//   );
// }