import GlobalFallback from '@/components/Fallback/GlobalFallback';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

interface Props {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

function GlobalErrorBoundary({ children, size }: Props) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      fallbackRender={(props) => <GlobalFallback size={size} {...props} />}
      onReset={reset}
    >
      {children}
    </ErrorBoundary>
  );
}

export default GlobalErrorBoundary;
