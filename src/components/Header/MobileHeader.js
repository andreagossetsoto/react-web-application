import React, { useState } from 'react';
import { Box, IconButton, Button, AppBar, Toolbar, styled, Modal, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloseIcon from '@mui/icons-material/Close';

const AppBarStyles = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.page,
  color: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    // backgroundColor: 'lightyellow',
  },
}));

const MenuStyles = styled('div')(({ }) => ({
  display: 'inline-grid',
}));
// const MenuStyles = styled(Modal)(({ theme, isOpen }) => ({
//   "@keyframes slidedown": {
//     from: {
//       opacity: 0,
//       transform: "translateY(-100%)"      
//     },
//     to: {
//       opacity: 1,
//       transform: "translateY(0)"
//     }
//   },
//   "@keyframes slideup": {
//     from: {
//       opacity: 1,
//       transform: "translateY(0)"
//     },
//     to: {
//       opacity: 0,
//       transform: "translateY(-100%)"
//     }
//   },
//   [theme.breakpoints.down('sm')]: {
//     animation: "slidedown 500ms ease-in-out",
//     position: "absolute",
//     display: isOpen ? 'inline-grid' : 'none',
//     top: '50px',
//     left: 0,
//     width: '100%',
//     backgroundColor: '#fff',
//     height: isOpen ? 'auto' : 0, /* Initially hide the menu */
//     overflow: 'hidden', /* Hide overflowing content */
//     opacity: isOpen ? 1 : 0,
//     visibility: isOpen ? 'visible' : 'hidden',
//   },
// }));

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AppBarStyles position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AcUnitIcon />
          </IconButton>
          <IconButton onClick={toggleMenu} sx={{ marginLeft: 'auto' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBarStyles>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        TransitionComponent={Slide} // Use Slide transition
        transitionDuration={500} // Set transition duration
        sx={{
          top: '0',
          left: '0',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          '& .modal-content': { 
            backgroundColor: '#fff',
            padding: '50px 20px',
            borderRadius: '8px',
            width: '100%',
            alignItems: 'center',
            display: 'grid',
          },
        }}
      >
        <div className="modal-content">
        <IconButton
          aria-label="close"
          style={{ position: 'absolute', top: 10, right: 10 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <MenuStyles>
          <Button color="inherit">Product</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Marketplace</Button>
          <Button color="inherit">Company</Button>
        </MenuStyles>
        </div>
      </Modal>
    </>
  );
}