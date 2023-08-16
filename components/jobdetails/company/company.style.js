import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
    elevation:16,
    shadowColor:'#C9C9C9',
  },
  logoImage: {
    width: "80%",
    height: "80%",
    resizeMode:'contain'
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.medium,
    textAlign: "center",
  },
  companyInfoBox: {
    marginTop: SIZES.small,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
    
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.secondary,
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.secondary,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});

export default styles;
