import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PlayerCard = (props) => {
  const { player } = props;
  const navigation = useNavigation();

  const goToPlayer = () => {
    navigation.navigate("PlayerDetail", {
      playerId: player.id,
      playerImage: player.image,
      playerNationImage: player.nationImage,
      playerClubImage: player.clubImage,
    });
    //console.log(player.name, " --> SELECCIONADO");
  };

  return (
    <TouchableWithoutFeedback onPress={goToPlayer}>
      <View style={styles.card}>
        <Image
          source={require("../assets/whine-ultimatecard2.png")} // Add the path to your background image
          style={styles.backgroundImage}
        ></Image>
        <Image source={{ uri: player.image }} style={styles.playerImage} />
        <Text style={styles.playerName}>{player.name}</Text>

        <View style={styles.flagContainer}>
          <Text style={styles.rating}>{player.rating}</Text>
          <Text style={styles.position}>{player.position}</Text>
          <Image
            source={{ uri: player.nationImage }}
            style={styles.nationImage}
          />
          <Image source={{ uri: player.clubImage }} style={styles.clubImage} />
        </View>

        <View style={styles.statsContainer}>
          <Text style={[styles.statsText, { marginRight: 10 }]}>
            {player.pace} PAC{"\n"}
            {player.shooting} SHO{"\n"}
            {player.passing} PAS
          </Text>
          <Text style={styles.statsText}>
            {player.dribbling} DRI{"\n"}
            {player.defending} DEF{"\n"}
            {player.physicality} PHY
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  // Card -> Background image - Player Image - Player Name
  card: {
    flex: 1,
    height: 175,
    maxWidth: 125,
    marginHorizontal: 0,
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  playerImage: {
    position: "absolute",
    width: "70%",
    height: "70%",
    resizeMode: "contain",
    right: 11,
    top: 5,
  },
  playerName: {
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: 93,
    fontSize: 12,
  },
  // StatsContainer & rows
  statsContainer: {
    position: "absolute",
    flexDirection: "row",
    top: 116,
  },
  statsText: {
    color: "#fff3b0",
    fontSize: 8,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  // Flag Container
  flagContainer: {
    //position: "relative",
    alignItems: "center",
    left: -32,
    top: -155,
  },
  rating: {
    color: "#fff3b0",
    marginBottom: 0,
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    marginBottom: Platform.OS === "ios" ? 0 : -5,
  },
  position: {
    color: "white",
    fontSize: 10,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  nationImage: {
    resizeMode: "contain",
    height: 15,
    width: 18,
  },
  clubImage: {
    resizeMode: "contain",
    height: 15,
    width: 17,
    marginTop: 3,
  },
});

export default PlayerCard;
