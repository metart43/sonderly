export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  black: {
    100: "hsl(0deg 0% 26%)"
  },
  iconColor: "#1C2126",
  primary: "#20A77A",
  secondary: "hsl(240deg 60% 63%)",
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

export const THEME = {
  queries: QUERIES,
  weights: WEIGHTS,
  colors: COLORS
};