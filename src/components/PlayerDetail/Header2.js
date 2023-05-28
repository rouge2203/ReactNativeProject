import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import getColorByLeague from "../../utils/getColorByLeague";
import styles from "./stylesheets/Header_Stylesheet";

const Header2 = (props) => {
  const { player, playerImage, playerNationImage, playerClubImage } = props;
  const playerInfo = player.player;
  //const color = getColorByLeague(player.league);
  //console.log(playerClubImage);
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/whine-ultimatecard2.png")} // Add the path to your background image
        style={styles.backgroundImage}
      ></Image>
      <Image source={{ uri: playerImage }} style={styles.playerImage} />
      <Text style={styles.playerName}>{playerInfo.name}</Text>

      <View style={styles.flagContainer}>
        <Text style={styles.rating}>{playerInfo.rating}</Text>
        <Text style={styles.position}>{playerInfo.position}</Text>
        <Image source={{ uri: playerNationImage }} style={styles.nationImage} />
        <Image source={{ uri: playerClubImage }} style={styles.clubImage} />
      </View>

      <View style={styles.statsContainer}>
        <Text style={[styles.statsText, { marginRight: 10 }]}>
          {playerInfo.pace} PAC{"\n"}
          {playerInfo.shooting} SHO{"\n"}
          {playerInfo.passing} PAS
        </Text>
        <Text style={styles.statsText}>
          {playerInfo.dribbling} DRI{"\n"}
          {playerInfo.defending} DEF{"\n"}
          {playerInfo.physicality} PHY
        </Text>
      </View>
    </View>
  );
};

export default Header2;
