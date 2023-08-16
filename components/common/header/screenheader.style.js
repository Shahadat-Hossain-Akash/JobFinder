import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  btnContainer: (bgColor,shadow) => ({
    width: 50,
    height: 50,
    backgroundColor: bgColor,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginTop:16,
    marginBottom:16,
    elevation:16,
    shadowColor:'#808080'
  }),
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
    
  }),
});

export default styles;
