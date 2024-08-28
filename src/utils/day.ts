import dayjs from 'dayjs';

export const getRemainedDay = (date: string): string => {
  const targetDate = dayjs(date);
  const today = dayjs();

  const dayDiff = targetDate.diff(today, 'day');

  if (dayDiff < 0) {
    return '마감';
  }
  if (dayDiff === 0) {
    return '오늘 마감';
  }
  return `${dayDiff}일 남음`;
};

export const isClosed = (deadline: string) => {
  const targetDate = dayjs(deadline);
  const today = dayjs();

  const dayDiff = targetDate.diff(today, 'day');

  return dayDiff <= 0;
};
