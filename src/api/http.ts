import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const DEFAULT_TIMOUT = 30000;

export const createClient = (config?: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: DEFAULT_TIMOUT,
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  });

  axiosInstance.interceptors.response.use((response) => {
    return response;
  });

  return axiosInstance;
};

export const httpClient = createClient();
