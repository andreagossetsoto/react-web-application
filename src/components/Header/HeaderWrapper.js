import Box from '@mui/material/Box';

import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

export default function HeaderWrapper() {
  return (
    <>
      <Box sx={{display: { xs: 'none', sm: 'block' }}}><DesktopHeader /></Box>
      <Box sx={{display: { xs: 'block', sm: 'none' }}}><MobileHeader /></Box>
    </>
  );
}
