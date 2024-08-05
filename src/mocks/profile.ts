import { http, HttpResponse } from 'msw';

const storeProfile = {
  business_name: '우리집',
  contact: '010-1111-1111',
  address: '대전광역시 동구 삼성동',
  img: 'https://...',
  sector_name: '한식',
};

const companyProfile = {
  business_name: '업체명',
  contact: '010-1111-1111',
  img: 'https://...',
  address: '대전광역시 동구 삼성동',
  sector_name: '도매업체',
  homepage: 'https://...',
  introduce: '도매업체 소개',
};

export const profileHandler = [
  http.get('/profile/:id?type="shop"', async () => {
    return HttpResponse.json(storeProfile);
  }),

  http.get('/profile/:id?type="company"', async () => {
    return HttpResponse.json(companyProfile);
  }),

  http.put('/users/profile', async ({ request }) => {
    const updateProfile = await request.json();
    console.log('Update Profile: ', updateProfile);
  }),
];
