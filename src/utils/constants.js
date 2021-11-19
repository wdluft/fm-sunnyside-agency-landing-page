export const COLORS = {
  primary: {
    red: `7 99% 70%`,
    yellow: `51 100% 49%`,
    desaturatedCyan: `167 40% 24%`,
    darkBlue: `198 62% 26%`,
    darkCyan: `168 34% 41%`,
  },

  neutral: {
    white: `0, 69%, 100%`,
    superDarkDesaturatedBlue: `212 27% 19%`,
    superDarkGrayBlue: `213 9% 39%`,
    darkGrayBlue: `232 10% 55%`,
    grayBlue: `210 4% 67%`,
  },
};

export const WEIGHTS = {
  normal: 600,
  medium: 700,
  bold: 900,
};

export const BREAKPOINTS = {
  tabletMin: 600,
  laptopMin: 950,
  desktopMin: 1300,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};
