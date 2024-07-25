import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Router from './routes';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
