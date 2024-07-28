import { useState } from 'react';
import { Address } from 'react-daum-postcode';

const useMap = () => {
  const [address, setAddress] = useState<Address | null>(null);
  const [isPostcodeVisible, setPostcodeVisible] = useState(false);

  const handleSelect = (data: Address) => {
    setAddress(data);
    setPostcodeVisible(false);
  };

  const openPostcode = () => {
    setPostcodeVisible(true);
  };
  const closePostcode = () => {
    setPostcodeVisible(false);
  };

  return {
    address,
    isPostcodeVisible,
    handleSelect,
    openPostcode,
    closePostcode,
  };
};

export default useMap;
