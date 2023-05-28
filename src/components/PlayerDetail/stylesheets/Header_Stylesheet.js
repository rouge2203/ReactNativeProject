import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Card -> Background image - Player Image - Player Name
  card: {
    alignItems: "center",
    top: 10,
  },
  backgroundImage: {
    position: "absolute",
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  playerImage: {
    height: 180,
    width: 180,
    resizeMode: "contain",
    top: 35,
    right: -10,
  },
  playerName: {
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: 170,
    fontSize: 17,
  },
  // StatsContainer & rows
  statsContainer: {
    position: "absolute",
    flexDirection: "row",
    top: 202,
  },
  statsText: {
    color: "#fff3b0",
    fontSize: 14,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  // Flag Container
  flagContainer: {
    //position: "relative",
    alignItems: "center",
    left: -55,
    top: -137,
  },
  rating: {
    color: "#fff3b0",
    marginBottom: 0,
    fontSize: 24,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    marginBottom: Platform.OS === "ios" ? 0 : -5,
  },
  position: {
    color: "white",
    fontSize: 14,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  nationImage: {
    resizeMode: "contain",
    height: 25,
    width: 30,
    top: 2,
  },
  clubImage: {
    resizeMode: "contain",
    height: 23,
    width: 28,
    marginTop: 10,
  },
});

export default styles;
