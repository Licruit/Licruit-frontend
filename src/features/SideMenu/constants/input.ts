export const INPUT = {
  shop: {
    label: '상호명',
    placeholder: '최근학',
    isRequired: true,
    hasValidation: true,
    'aria-label': 'businessName',
  },
  contact: {
    label: '대표(개인) 연락처',
    placeholder: '01000000000',
    isRequired: true,
    'aria-label': 'contact',
  },
  address: {
    label: '사업장 주소',
    placeholder: '서울특별시 서울구 서울동 000-00',
    'aria-label': 'address',
  },
  category: { label: '업종 카테고리', isRequired: true },
  introduce: { label: '소갯말' },
  url: {
    label: 'URL',
    placeholder: '업체 사이트 주소를 입력해 주세요',
    'aria-label': 'homepage',
  },
  product: {
    label: '상품을 입력해 주세요',
    placeholder: '백경 13',
    isRequired: true,
    isSearch: true,
  },
  period: {
    label: '기간',
    placeholder: '2024.07.21~2024.09.11',
    isRequired: true,
  },
  startTime: { label: '시작 시간', placeholder: '09:00', isRequired: true },
  delivery: {
    label: '배송 예정일',
    placeholder: '2024.07.21~2024.09.11',
    isRequired: true,
  },
  price: { label: '가격', placeholder: '16.000', isRequired: true },
  min: { label: '목표수량', placeholder: '100', isRequired: true },
  max: {
    label: '최대수량',
    placeholder: '최대수량은 도매업체가 발주할 수 있는 최대 병수입니다.',
  },
  deliveryFee: { label: '배송비 설정', placeholder: '3,000', isRequired: true },
  freeDelivery: {
    label: '무료 배송비 설정',
    placeholder: '100,000',
    hasInfo: true,
  },
  location: { label: '지역 제한 선택', isRequired: true },
  groupBuy: {
    label: '공동구매 제목',
    placeholder: '제목을 입력해 주세요',
    isRequired: true,
    hasValidation: true,
  },
  title: {
    label: '제목명',
    placeholder: '제목을 입력해 주세요',
    isRequired: true,
  },
  content: {
    label: '내용',
    isRequired: true,
  },
};
