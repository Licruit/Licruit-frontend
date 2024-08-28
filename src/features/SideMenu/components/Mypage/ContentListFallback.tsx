import { AxiosError } from 'axios';
import { FallbackProps } from 'react-error-boundary';

function Fallback({ error }: FallbackProps) {
  if (error instanceof AxiosError && error.response?.status === 404) {
    return <></>;
  }
}

export default Fallback;
