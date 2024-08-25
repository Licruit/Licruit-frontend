export const formatNumber = (value: number) => {
  return value.toLocaleString();
};

export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};

export const formatBusinessNumber = (businessNumber: string) => {
  return businessNumber.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
};

export const formatPrice = (price: string) => {
  const numericValue = price.replace(/[^\d]/g, '');
  if (numericValue === '') return '';
  return Number(numericValue).toLocaleString();
};

export const formatPriceToNumber = (price: string) => {
  return Number(price.replace(/,/g, ''));
};
