const COLORS = {
  primary: "#233158",
  secondary: "#394669",
  tertiary: "#F66042",

  gray: "#f4f4f6",
  gray2: "#b2b7c5",

  white: "#FDFFFD",
  lightWhite: "#FAFAFC",
  yellow: "#FDAB6C",
};

const FONT = {
  regular: "RM-Regular",
  medium: "RM-Medium",
  bold: "RM-Bold",
};

const SIZES = {
  xxxSmall:6,
  xxSmall:8,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
