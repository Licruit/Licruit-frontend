import { setupWorker } from 'msw/browser';
import { profileHandler } from './profile';

export const worker = setupWorker(...profileHandler);
