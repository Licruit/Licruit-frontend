export const color = {
  common: {
    0: '#000000',
    100: '#FFFFFF',
  },
  primary: {
    50: '#FFF2DF',
    100: '#FFDDB0',
    200: '#FFC77D',
    300: '#FFB049',
    400: '#FF9E21',
    500: '#FF8D00',
    600: '#FF8100',
    700: '#FD7003',
    800: '#F75E06',
    900: '#EE3E09',
  },
  neutral: {
    50: '#F6F8FB',
    100: '#EEEFF2',
    200: '#E3E4E7',
    300: '#D1D3D5',
    400: '#ADAEB1',
    500: '#8C8D90',
    600: '#656668',
    700: '#525355',
    800: '#343537',
    900: '#141517',
  },
};

const typo = {
  heading: {
    extra_bold: {
      80: `
        font-size: 80px;
        font-weight: 800;
        line-height: 88px;
      `,
      36: `
        font-size: 36px;
        font-weight: 800;
        line-height: 50.4px;
      `,
    },
    bold: {
      48: `
        font-size: 48px;
        font-weight: 700;
        line-height: 67.2px;
      `,
      42: `
        font-size: 42px;
        font-weight: 700;
        line-height: 58.8px;
      `,
      36: `
        font-size: 36px;
        font-weight: 700;
        line-height: 50.4px;
      `,
      30: `
        font-size: 30px;
        font-weight: 700;
        line-height: 42px;
      `,
      28: `
        font-size: 28px;
        font-weight: 700;
        line-height: 39.2px;
      `,
      24: `
        font-size: 24px;
        font-weight: 700;
        line-height: 33.6px;
      `,
      20: `
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      `,
      18: `
        font-size: 18px;
        font-weight: 700;
        line-height: 25.2px;
      `,
      16: `
        font-size: 16px;
        font-weight: 700;
        line-height: 22.4px;
      `,
      14: `
        font-size: 14px;
        font-weight: 700;
        line-height: 19.6px;
      `,
    },
  },
  body: {
    semi_bold: {
      16: `
        font-size: 16px;
        font-weight: 600;
        line-height: 22.4px;
      `,
      14: `
        font-size: 14px;
        font-weight: 600;
        line-height: 19.6px;
      `,
      12: `
        font-size: 12px;
        font-weight: 600;
        line-height: 16.8px;
      `,
    },
    medium: {
      16: `
        font-size: 16px;
        font-weight: 500;
        line-height: 22.4px;
      `,
      14: `
        font-size: 14px;
        font-weight: 500;
        line-height: 19.6px;
      `,
      12: `
        font-size: 12px;
        font-weight: 500;
        line-height: 16.8px;
      `,
    },
  },
};

const theme = {
  color,
  typo,
} as const;

export default theme;
