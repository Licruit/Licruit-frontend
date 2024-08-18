import { setupServer } from 'msw/node';
import { profileHandler } from './profile';

export const server = setupServer(...profileHandler);
