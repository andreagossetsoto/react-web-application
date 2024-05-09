import { Height } from '@mui/icons-material';
import { Button, styled } from '@mui/material';

const CareerStyles = styled('div')(({ theme }) => ({
  '& .career-visit-page': {
    backgroundColor: theme.palette.primary.darkGray,
    width: '350px',
    zIndex: '1',
    [theme.breakpoints.down("sm")]: {
      height: '32px',
    },
  },
  '& .career-hiring': {
    backgroundColor: theme.palette.primary.purple,
    zIndex: '2',
    [theme.breakpoints.down("sm")]: {
      height: '32px',
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: 'fit-content',
  },
}));

export default function Career() {
  return (
    <CareerStyles>
      <Button className='career-visit-page' variant="contained">
        <Button className='career-hiring' variant="contained">
          WE'RE HIRING
        </Button>
        Visit our career page
      </Button>
    </CareerStyles>
  );
}