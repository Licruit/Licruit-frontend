export const formatNumber = (value: number) => {
  return value.toLocaleString();
};

export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};
