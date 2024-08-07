import { BASE_URL, DEFAULT_TIMOUT } from '@/constants/api';
import { STORAGE_KEY } from '@/constants/storage';
import useSessionStore from '@/store/sessionStore';
import { deleteTokenFromStorage, getTokenFromStorage } from '@/utils/storage';
import axios from 'axios';

const baseInstance = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMOUT,
});

const authInstance = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMOUT,
});

authInstance.interceptors.request.use(
  (req) => {
    const { accessToken } = getTokenFromStorage();
    if (accessToken) {
      req.headers.Authorization = accessToken;
    }
    return req;
  },
  (err) => Promise.reject(err)
);

authInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const { isLoggedIn, setIsLoggedIn } = useSessionStore.getState();
    const { refreshToken } = getTokenFromStorage();

    if (isLoggedIn && err.response.status === 401) {
      const originRequest = err.config;
      try {
        const result = await baseInstance.post('/users/refresh', {
          headers: {
            refresh: refreshToken,
          },
        });

        const newAccessToken = result.data.accessToken;

        if (newAccessToken) {
          sessionStorage.setItem(STORAGE_KEY.accessToken, newAccessToken);
          originRequest.headers.Authorization = newAccessToken;
        }
        return authInstance(originRequest);
      } catch (error) {
        setIsLoggedIn(false);
        deleteTokenFromStorage();
        window.alert('로그인 세션이 만료되었습니다. 다시 로그인해주세요.');
        window.location.href = '/auth/login';
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

export { baseInstance, authInstance };
