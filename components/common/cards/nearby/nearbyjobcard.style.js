import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    elevation:16,
    shadowColor:'#C9C9C9',
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    elevation:12,
    shadowColor:'#909090',
    marginTop:12
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    marginTop: 3,
    textTransform: "capitalize",
  },
  companyName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.gray2,
    marginTop:8,
    marginBottom:8,
    textTransform:"capitalize"
  },
  jobSalary: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.yellow,
    marginTop: 3,
    textTransform: "capitalize",
  },
  jobPost: {
    fontSize: SIZES.small-2,
    fontFamily: FONT.regular,
    color: COLORS.gray2,
    textTransform: "capitalize",
    
  },
  salaryDate :{
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom:2,
    marginTop:8
},
});

export default styles;
