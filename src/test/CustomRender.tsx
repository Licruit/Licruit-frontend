import { PropsWithChildren, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

const client = new QueryClient();

function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}

function CustomRender(ui: ReactElement, options = {}) {
  render(ui, { wrapper: Providers, ...options });
}

export { CustomRender as render };
