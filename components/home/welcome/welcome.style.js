import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: 28,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.regular,
    fontSize: 20,
    color: COLORS.primary,
    marginTop: 8,
    marginBottom:8,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    marginTop: 8,
    marginBottom:16,
    
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    elevation:16,
    shadowColor:'#808080'
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    elevation:16,
    shadowColor:'#808080'
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
    paddingTop:4,
    paddingBottom:4,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: 18,
    paddingHorizontal: SIZES.xLarge,
    borderRadius: SIZES.medium,
    backgroundColor: activeJobType === item ? COLORS.primary : COLORS.gray,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.regular,
    color: activeJobType === item ? COLORS.white : COLORS.gray2,
  }),
});

export default styles;
