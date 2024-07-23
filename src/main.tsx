import * as Sentry from '@sentry/react';
import ReactDOM from 'react-dom/client';
import App from './App';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN_KEY,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1.0,
  tracePropagationTargets: [
    'localhost',
    '5173',
    /^https:\/\/licruit\.store\/.*/,
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
// 에러 추적 테스트 : 의도적으로 오류 발생시켜보기
// Sentry.captureException(new Error('에러 발생1'));
