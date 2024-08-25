export const formatNumber = (value: number) => {
  return value.toLocaleString();
};

export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};

export const formatBusinessNumber = (businessNumber: string) => {
  return businessNumber.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
};

export const formatPrice = (value: string) => {
  const numericValue = value.replace(/,/g, '');
  if (numericValue === '') return '';
  return Number(numericValue).toLocaleString();
};
