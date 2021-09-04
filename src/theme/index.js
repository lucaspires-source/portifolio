import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#2c387e',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#3f51b5',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#6573c3',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
};

export default {
  colors,
  borderRadius: '12px',
  fontFamily: '\'Rubik\', sans-serif',
  typographyVariants,
};
