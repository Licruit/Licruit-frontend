import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import Router from './routes';
import theme from './styles/theme';
import { queryClient } from './api/queryClient';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ToastContainer autoClose={2000} limit={1} />
          <GlobalStyle />
          <ScrollToTop />
          <Router />
        </HelmetProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
