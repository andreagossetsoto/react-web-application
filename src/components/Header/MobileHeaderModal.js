import React from "react";
import {
  Box,
  IconButton,
  Button,
  styled,
  Modal,
  Slide,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MenuStyles = styled("div")(({theme}) => ({
  display: "inline-grid",
}));

export default function MobileHeaderModal({isOpen = false, toggleModalMenu}) {
  return (
    <Modal
      sx={{
        height: "50%",
      }}
      open={isOpen}
      onClose={toggleModalMenu}
    >
      <Fade
        in={isOpen}
        timeout={{ 
          "enter": 500, 
          "exit": 300
        }}
      >
        <div>
          <Slide
            in={isOpen}
            timeout={500}
            easing="cubic-bezier(0.42, 0, 0.58, 1)"
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                width: '100%',
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <div className="modal-content">
                <IconButton
                  aria-label="close"
                  style={{ position: "fixed", top: 0, right: 0 }}
                  onClick={toggleModalMenu}
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
            </Box>
          </Slide>
        </div>
      </Fade>
    </Modal>
  );
}
