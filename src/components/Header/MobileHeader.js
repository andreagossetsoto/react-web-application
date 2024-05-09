import React, { useState } from "react";
import {
  IconButton,
  AppBar,
  Toolbar,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import MobileHeaderModal from "./MobileHeaderModal";

const AppBarStyles = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.page,
  color: theme.palette.primary.main,
}));

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBarStyles position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AcUnitIcon />
          </IconButton>
          <IconButton onClick={toggleMenu} sx={{ marginLeft: "auto", color: '#fff' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBarStyles>
      <MobileHeaderModal isOpen={isOpen} toggleModalMenu={toggleMenu} />
    </>
  );
}
