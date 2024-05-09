import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const AppBarStyles = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.page,
  color: theme.palette.primary.main,
}));

export default function DesktopHeader() {
  return (
    <AppBarStyles position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AcUnitIcon />
        </IconButton>
        <Button color="inherit">Product</Button>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Marketplace</Button>
        <Button color="inherit">Company</Button>
        <Box sx={{ marginLeft: 'auto' }}>
          <Button color="inherit">Log in</Button>
          <Button variant="contained" sx={{backgroundColor: '#4D5562'}}>Start free trial</Button>
        </Box>
      </Toolbar>
    </AppBarStyles>
  );
}