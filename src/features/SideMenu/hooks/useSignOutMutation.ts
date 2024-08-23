import { useMutation } from '@tanstack/react-query';
import { signOut } from '../api/signOut';
import { SignOutReq } from '../model/signout.model';

const useSignOutMutaion = () => {
  return useMutation({
    mutationFn: (data: SignOutReq) => signOut(data),
  });
};

export default useSignOutMutaion;
