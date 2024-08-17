import axios from 'axios';
import { toast } from 'react-toastify';

export const hanldeMutationError = (error: unknown) => {
  if (axios.isAxiosError(error) && error.response) {
    const httpMessage = error.response?.data.message;
    toast.error(httpMessage);
  } else {
    toast.error('일시적인 오류가 발생했습니다.\n다시 시도해주세요.');
  }
  toast.clearWaitingQueue();
};
