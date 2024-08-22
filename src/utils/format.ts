export const formatNumber = (value: number) => {
  return value.toLocaleString();
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};
