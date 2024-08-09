import * as Sentry from '@sentry/react';
import ReactDOM from 'react-dom/client';
import App from './App';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN_KEY,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracePropagationTargets: [
    'localhost',
    '5173',
    /^https:\/\/licruit-web.netlify.app\/.*/,
  ],
  tracesSampleRate: 1.0,
  tracesSampler: () => 0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
