import { BASE_URL, DEFAULT_TIMOUT } from '@/constants/api';
import PATH from '@/constants/path';
import { STORAGE_KEY } from '@/constants/storage';
import useSessionStore from '@/store/sessionStore';
import { deleteTokenFromStorage, getTokenFromStorage } from '@/utils/storage';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

const createClient = (config?: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMOUT,
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (req) => {
      const { accessToken } = getTokenFromStorage();
      if (accessToken) {
        req.headers.Authorization = accessToken;
      }
      return req;
    },
    (err) => Promise.reject(err)
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const { isLoggedIn, setIsLoggedIn } = useSessionStore.getState();
      const { refreshToken } = getTokenFromStorage();

      if (isLoggedIn && err.response.status === 401) {
        const originRequest = err.config;
        try {
          const result = await axios.post(`${BASE_URL}/users/refresh`, {
            headers: {
              refresh: refreshToken,
            },
          });

          const newAccessToken = result.data.accessToken;

          if (newAccessToken) {
            const storage = sessionStorage.getItem(STORAGE_KEY.refreshToken)
              ? sessionStorage
              : localStorage;
            storage.setItem(STORAGE_KEY.accessToken, newAccessToken);
            originRequest.headers.Authorization = newAccessToken;
          }
          return axiosInstance(originRequest);
        } catch (error) {
          setIsLoggedIn(false);
          deleteTokenFromStorage();
          toast.info('로그인 세션이 만료되었습니다. 다시 로그인해주세요.');
          window.location.href = PATH.login;
          return Promise.reject(error);
        }
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
