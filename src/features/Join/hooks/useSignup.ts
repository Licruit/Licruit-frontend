import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { DropdownItem } from '@/components/Input/Dropdown';
import { toast } from 'react-toastify';
import { useFormContext } from 'react-hook-form';
import { duplicateBusiness, getKSIC } from '../api/signup.api';
import useCerficationMutation from './useCerficationMutation';

export const useSignup = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [companyData, setCompanyData] = useState({
    companyNumber: '',
    isWholesaler: false,
  });
  const { mutate: uploadCertificate } = useCerficationMutation();
  const { setValue } = useFormContext();

  const { data: industryData } = useQuery<DropdownItem[], Error>({
    queryKey: ['ksic'],
    queryFn: getKSIC,
    refetchOnWindowFocus: false,
  });

  const duplicationMutation = useMutation<boolean, Error>({
    mutationFn: () => duplicateBusiness(companyData.companyNumber),
    onSuccess: () => {
      setIsVerified(true);
      setValue('companyNumber', companyData.companyNumber);
    },
    onError: () => {
      toast.error('중복된 사업자 번호입니다.');
    },
  });

  const handleSendId = () => {
    duplicationMutation.mutate();
  };

  const handleUploadCertificate = (formData: FormData) => {
    uploadCertificate(formData, {
      onSuccess: (data) => {
        console.log('서버 응답:', data);
        setCompanyData({
          companyNumber: data.companyNumber,
          isWholesaler: data.isWholesaler,
        });
        handleSendId();
      },
      onError: () => {
        toast.error('사업자 등록증 업로드에 실패했습니다.');
      },
    });
  };
  return {
    industryData,
    handleSendId,
    isVerified,
    setIsVerified,
    handleUploadCertificate,
    companyData,
  };
};
