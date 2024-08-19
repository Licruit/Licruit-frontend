import GlobalFallback from '@/components/Fallback/GlobalFallback';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={GlobalFallback} onReset={reset}>
      {children}
    </ErrorBoundary>
  );
}

export default GlobalErrorBoundary;
