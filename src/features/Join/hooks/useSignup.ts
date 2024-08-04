import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import {
  duplicateBusiness,
  getKSIC,
  verificationBusiness,
} from '../api/signup.api';
import { KSIC } from '../types/signup';

export const useSignup = () => {
  const { watch, setError, clearErrors } = useFormContext();
  const [isVerified, setIsVerified] = useState(false);

  const companyNumber = watch('companyNumber') as string;

  const { data: industryData } = useQuery<KSIC[], Error>({
    queryKey: ['ksic'],
    queryFn: getKSIC,
    refetchOnWindowFocus: false,
  });

  const duplicationMutation = useMutation<boolean, Error>({
    mutationFn: () => duplicateBusiness(companyNumber),
    onSuccess: (isduplicate) => {
      if (!isduplicate) {
        clearErrors('companyNumber');
        verificationMutation.mutate();
      } else {
        setError('companyNumber', {
          type: 'manual',
          message: '사업자 확인이 필요합니다.',
        });
      }
    },
    onError: () => {
      setError('companyNumber', {
        type: 'manual',
        message: '이미 사용된 사업자번호입니다.',
      });
    },
  });

  const verificationMutation = useMutation<void, Error>({
    mutationFn: () => verificationBusiness(companyNumber),
    onSuccess: () => {
      clearErrors('companyNumber');
      setIsVerified(true);
    },
  });

  const handleSendId = () => {
    duplicationMutation.mutate();
  };

  return { industryData, handleSendId, isVerified, setIsVerified };
};
