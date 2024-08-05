export const CATEGORY = {
  main: { rank: '랭킹', new: '최신', time: '마감임박' },
  catalog: {
    all: '전체',
    takju: '탁주',
    yakju: '약주·청주',
    fruit_wine: '과실주',
    spirits: '증류주',
    liqueur: '리큐르/기타주류',
  },
  order: {
    ordered: '주문 내역조회',
    completed: '성사',
    pending: '미달성내역',
    canceled: '취소내역',
  },
  group_buying: {
    rank: '랭킹',
    new: '최신',
    time: '마감임박',
  },
  group_buying_manage: {
    ordered: '주문 내역조회',
    completed: '성사',
    canceled: '취소내역',
  },
} as const;
