export const getRemainedDay = (date: string): string => {
  const targetDate = new Date(date);
  const today = new Date();

  const timeDiff = targetDate.getTime() - today.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  if (dayDiff < 0) {
    return '마감';
  }
  if (dayDiff === 0) {
    return '오늘 마감';
  }
  return `${dayDiff}일 남음`;
};
