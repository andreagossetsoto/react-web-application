import { styled, Typography } from '@mui/material';

const HeadingStyles = styled('div')(({ theme }) => ({
  padding: '40px 0',
  '& .content-title-1': {
    color: '#fff',
    fontSize: 'calc(6vw - 25px)',
    [theme.breakpoints.down("md")]: {
      fontSize: '8vw',
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '10vw',
    },
  },
  '& .content-title-2': {
    color: '#6169E9',
    fontSize: 'calc(6vw - 25px)',
    [theme.breakpoints.down("md")]: {
      fontSize: '8vw',
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '10vw',
    },
  },
  '& .content-description': {
    color: '#fff !important',
    width: '40% !important',
  },
}));

const BodyStyles = styled('div')(({ theme }) => ({
  '& .content-description': {
    color: '#fff',
    width: '50%',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },
  },
}));

export default function BodyContent() {
  return (
    <>
    <HeadingStyles>
      <Typography className='content-title-1' variant="h1">A better way to</Typography>
      <Typography className='content-title-2' variant="h1">ship web apps</Typography>
    </HeadingStyles>
    <BodyStyles>
      <Typography className='content-description' variant="h5">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries.
      </Typography>
    </BodyStyles>
    </>
  );
}