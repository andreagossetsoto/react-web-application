import { styled } from '@mui/material';

import Career from './Career';
import BodyContent from './Body';
import StartFreeTrial from './StartFreeTrial';

const ContentStyles = styled('div')(({ theme }) => ({
  backgroundImage: 'url("/BackgroundImage.png")',
  backgroundSize: 'contain',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: '1280px',
  paddingTop: '80px',
  paddingLeft: '80px',
  width: '100%',
  [theme.breakpoints.down("md")]: {
    padding: '60px 80px 0 60px',
    width: 'auto',
  },
  [theme.breakpoints.down("sm")]: {
    padding: '30px 20px 0 20px',
    width: 'auto',
  },
}));

export default function Content() {
  return (
    <ContentStyles>
      <Career />
      <BodyContent />
      <StartFreeTrial />
    </ContentStyles>
  );
}
