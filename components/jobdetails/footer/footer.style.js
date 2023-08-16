import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    elevation:12,
    shadowColor:'#808080',
    backgroundColor:COLORS.white
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: COLORS.tertiary,
  },
  applyBtn: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
    elevation:12,
    shadowColor:'#808080'
  },
  applyBtnText: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.regular,
  },
});

export default styles;
