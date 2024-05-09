import {Box, styled, Button, Typography} from '@mui/material';


const ContentStyles = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundImage: 'url("/src/assets/BackgroundImage.png")',
  paddingTop: '120px',
  paddingLeft: '80px',
}));

const HeadingStyles = styled('div')(({ theme }) => ({
  paddingTop: '40px',
}));

export default function Content() {
  return (
    <ContentStyles>
      <Button variant="contained" sx={{ zIndex: '1', backgroundColor: '#282c34'}}>
        <Button variant="contained" sx={{zIndex: '2', backgroundColor: '#6169E9'}}>WE'RE HIRING</Button>
        Visit our career page
        </Button>
      <HeadingStyles>
        <Typography variant="h1" sx={{color: '#000000', fontSize: '5rem !important'}}>A better way to</Typography>
        <Typography variant="h1" sx={{color: '#6169E9', fontSize: '5rem !important'}}>ship web apps</Typography>
      </HeadingStyles>
      <div>
        <Typography variant="h5" sx={{width: '60%', color: '#000000'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Typography>
      </div>
    </ContentStyles>
  );
}
