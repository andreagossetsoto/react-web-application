import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { styled } from '@mui/system';

import Header from './components/Header/HeaderWrapper'
import Content from './components/Content'

const MainContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.page,
  minHeight: '100vh',
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Header />
        <Content />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
