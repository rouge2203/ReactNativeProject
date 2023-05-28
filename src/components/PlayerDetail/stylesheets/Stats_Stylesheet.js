import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    alignItems: "center",
  },
  attributeBlock: {
    width: "95%",
    alignItems: "center",
    marginVertical: 10,
  },
  attributeInfo: {
    flexDirection: "row",
    width: "80%",
    borderBottomWidth: 2,
    borderColor: "#e09f3e",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  attributeTitle: {
    marginHorizontal: 10,
    fontSize: 20,
    color: "#9e2a2b",
  },
  childAttributeTitleBlock: {
    width: "80%",
    paddingLeft: 20,
    marginTop: 5,
  },
  childAttributeTitle: {
    fontSize: 13,
    color: "#540b0e",
  },
  percentageTitle: {
    color: "#e09f3e",
    fontWeight: "bold",
  },
  attributePercentageBlock: {
    width: "80%",
    flexDirection: "row",
    marginTop: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingLeft: 20,
  },
  barBg: {
    width: "80%",
    height: 10,
    backgroundColor: "#540b0e",
    borderRadius: 5,
    overflow: "hidden",
  },
  barFill: {
    height: 10,
    backgroundColor: "#f6a700",
  },
});

export default styles;
