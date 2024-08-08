export const FILTER: {
  [key: string]: {
    title: string;
    values: string[];
  };
} = {
  alcohol: {
    title: '도수',
    values: ['1~9%', '10~19%', '20~29%', '30~39%', '40~60%'],
  },
  rating: {
    title: '평점',
    values: ['높은순', '낮은순'],
  },
};
