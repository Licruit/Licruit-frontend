import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { requestCode, verifyCode } from '../api/auth.api';

export const useCode = () => {
  const { setValue, setError } = useFormContext();
  const [expTime, setExpTime] = useState<string | null>(null);

  const handleSendCode = (contact: string) => {
    setExpTime(null);

    requestCode(contact).then((res) => {
      if (res) {
        setExpTime(res.data.expTime);
      }
    });
  };

  const handleVerifyCode = async (contact: string, code: number) => {
    return verifyCode(contact, code).then((res) => {
      if (!res) {
        setError('code', { message: '인증코드가 틀렸습니다.' });
      }
      setValue('isVerified', res);
      return res;
    });
  };

  return { handleSendCode, expTime, handleVerifyCode };
};
