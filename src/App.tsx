import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import LoadingSpinner from './components/Spinner/Spinner';
import Router from './routes';
import theme from './styles/theme';
import { queryClient } from './api/queryClient';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ToastContainer autoClose={2000} limit={1} />
          <GlobalStyle />
          <Suspense fallback={<LoadingSpinner />}>
            <Router />
          </Suspense>
        </HelmetProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
