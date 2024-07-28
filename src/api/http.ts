import useSessionStore from '@/store/sessionStore';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const DEFAULT_TIMOUT = 30000;

const createClient = (config?: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: DEFAULT_TIMOUT,
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const { isLoggedIn, setIsLoggedIn } = useSessionStore.getState();

      if (isLoggedIn && err.response.status === 401) {
        const originRequest = err.config;
        try {
          await axiosInstance.post('/users/refresh');
          return axiosInstance(originRequest);
        } catch (error) {
          setIsLoggedIn(false);
          window.alert('로그인 세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        window.location.href = '/auth/login';
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
