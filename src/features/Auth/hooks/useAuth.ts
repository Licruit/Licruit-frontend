import { useState } from 'react';
import { getKSIC, signup, VerificationBusiness } from '../api/signup.api';
import { KSIC, Signup } from '../types/signup';

const useAuth = () => {
  const [ksic, setKsic] = useState<KSIC[]>([]);
  /* 
TODO: Add Error
TODO: /login 이동
   */

  const userSignup = async (userData: Signup) => {
    try {
      await signup(userData);
    } catch (err) {
      console.error('회원가입 실패', err);
      throw err;
    }
  };

  const fetchKSIC = async () => {
    try {
      const response = await getKSIC();
      setKsic(response);
    } catch (err) {
      console.error('업종 가져오기 실패', err);
      throw err;
    }
  };

  const checkBusiness = async (businessNumber: string) => {
    try {
      const response = await VerificationBusiness(businessNumber);
      return response.data;
    } catch (err) {
      console.error('진위확인실패', err);
      throw err;
    }
  };

  return { userSignup, fetchKSIC, ksic, checkBusiness };
};

export default useAuth;
