import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { requestCode, verifyCode } from '../../api/auth.api';

export const useCode = () => {
  const { setValue, setError, trigger } = useFormContext();
  const [expTime, setExpTime] = useState<string | null>(null);

  const handleSendCode = (contact: string) => {
    setExpTime(null);
    setValue('code', '');
    setValue('isVerified', false);
    setError('code', { message: '' });

    requestCode(contact).then((res) => {
      if (res) {
        setExpTime(res.data.expTime);
      }
    });
  };

  const handleVerifyCode = async (contact: string, code: number) => {
    verifyCode(contact, code).then(async (res) => {
      if (!res) {
        setError('code', { message: '인증코드가 틀렸습니다.' });
        setValue('isVerified', false);
      } else {
        setValue('isVerified', true);
        trigger('code');
      }
    });
  };

  return { handleSendCode, expTime, handleVerifyCode };
};
