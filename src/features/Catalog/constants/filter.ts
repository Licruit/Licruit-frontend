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
  price: {
    title: '가격',
    values: [
      '10,000 원 이하',
      '10,000 원 ~ 50,000 원',
      '50,000 원 ~ 100,000 원',
      '100,000 원 ~ 300,000 원',
      '300,000 원 이상',
    ],
  },
  rating: {
    title: '평점',
    values: ['높은순', '낮은순'],
  },
};
