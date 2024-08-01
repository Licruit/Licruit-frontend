import { useState } from 'react';
import { Address } from 'react-daum-postcode';
import { useFormContext } from 'react-hook-form';

const useMap = () => {
  const [isPostcodeVisible, setPostcodeVisible] = useState(false);
  const { setValue } = useFormContext();
  const handleSelect = (data: Address) => {
    setPostcodeVisible(false);
    setValue('address', data.address);
  };

  const openPostcode = () => {
    setPostcodeVisible(true);
  };
  const closePostcode = () => {
    setPostcodeVisible(false);
  };

  return {
    isPostcodeVisible,
    handleSelect,
    openPostcode,
    closePostcode,
  };
};

export default useMap;
