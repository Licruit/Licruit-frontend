import { BASE_URL } from '@/constants/api';
import { http, HttpResponse } from 'msw';

export const profileHandler = [
  http.put(`${BASE_URL}/users/profile`, async ({ request }) => {
    return HttpResponse.json(request, { status: 200 });
  }),
];
