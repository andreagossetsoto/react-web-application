import { styled, Button, TextField } from '@mui/material';

const StartFreeTrialStyles = styled('div')(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '60px',
  width: 'fit-content',
  [theme.breakpoints.down("sm")]: {
    flexDirection: 'column',
    width: '100%',
  },
}));

const TextFieldStyles = styled(TextField)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '8px',
  flex: 1,
  marginRight: '20px',
  verticalAlign: 'middle',
  width: '600px',
  '& input': {
    padding: '16px 14px',
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: 0,
    width: '100%',
  },
}));

const FreeTrialButtonStyles = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.purple,
  color: theme.palette.primary.main,
  minWidth: 100,
  padding: '16px 16px',
  [theme.breakpoints.down("sm")]: {
    width: '100%',
  },
}));

export default function StartFreeTrial() {
  return (
    <StartFreeTrialStyles>
      <TextFieldStyles fullWidth placeholder="Enter your email"/>
      <FreeTrialButtonStyles variant="contained">Start Free Trial</FreeTrialButtonStyles>
    </StartFreeTrialStyles>
  );
}
