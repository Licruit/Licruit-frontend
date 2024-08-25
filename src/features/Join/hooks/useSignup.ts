import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { DropdownItem } from '@/components/Input/Dropdown';
import { toast } from 'react-toastify';
import { duplicateBusiness, getKSIC } from '../api/signup.api';

export const useSignup = (companyNumber: string) => {
  const [isVerified, setIsVerified] = useState(false);

  const { data: industryData } = useQuery<DropdownItem[], Error>({
    queryKey: ['ksic'],
    queryFn: getKSIC,
    refetchOnWindowFocus: false,
  });

  const duplicationMutation = useMutation<boolean, Error>({
    mutationFn: () => duplicateBusiness(companyNumber),
    onSuccess: () => {
      setIsVerified(true);
    },
    onError: () => {
      toast.error('중복된 사업자 번호입니다.');
    },
  });

  const handleSendId = () => {
    duplicationMutation.mutate();
  };

  return { industryData, handleSendId, isVerified, setIsVerified };
};
