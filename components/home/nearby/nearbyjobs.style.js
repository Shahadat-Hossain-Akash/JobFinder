import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.gray2,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },

  //Pagination

  headerContainer: {
    width: "100%",
    backgroundColor:COLORS.white
},
searchTitle: {
    fontFamily: FONT.medium,
    fontSize: 40,
    color: COLORS.primary,
    textTransform:'capitalize'
},
noOfSearchedJobs: {
    marginTop: 2,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
},
loaderContainer: {
    marginTop: SIZES.medium
},
footerContainer: {
    marginTop: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
},
paginationButton: {
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.tertiary
},
paginationImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.white
},
paginationTextBox: {
    width: 50,
    height: 50,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLORS.white
},
paginationText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    paddingHorizontal:20,
    paddingVertical:8,
}
});

export default styles;
