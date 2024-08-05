import { setupWorker } from 'msw/browser';
import { profileHandler } from './profile';

const handlers = [...profileHandler];

export const worker = setupWorker(...handlers);
