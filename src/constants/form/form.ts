export const REGEXP = {
  companyNumber: /^\d{10}$/,
  contact: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
  password: /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,15}$/,
  isNumber: /^\d+$/,
};
