import { useMutation } from '@tanstack/react-query';
import { uploadCertificate } from '../api/signup.api';

const useCerficationMutation = () => {
  return useMutation({
    mutationFn: (image: FormData) => uploadCertificate(image),
  });
};

export default useCerficationMutation;
