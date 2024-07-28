import { useState } from 'react';
import { requestCode } from '../api/auth.api';

export const useCode = () => {
  const [expTime, setExpTime] = useState<string | null>(null);
  const [isFailed, setIsFailed] = useState<boolean | null>(null);

  const handleSendCode = (contact: string) => {
    setExpTime(null);
    setIsFailed(null);

    requestCode(contact).then((res) => {
      if (res) {
        setExpTime(res.data.expTime);
      }
    });
  };

  return { handleSendCode, expTime, isFailed, setIsFailed };
};
