import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (name, active) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: name === active ? COLORS.primary : COLORS.gray,
    
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,

  }),
  btnText: (name, active) => ({
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: name === active ? COLORS.gray2 : COLORS.primary,
  }),
});

export default styles;
