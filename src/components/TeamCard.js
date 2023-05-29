import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { API_KEY } from "../utils/constants";
import { getTeamLogoByUrlApi } from "../api/teams";
import getColorsByLeagues from "../utils/getColorByLeague";

const TeamCard = (props) => {
  const { team } = props;
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const navigation = useNavigation();

  const leagueColor = getColorsByLeagues(team.league);
  const leagueColor2 = "#9e2a2b";
  const bgStyles = { backgroundColor: leagueColor2, ...styles.bgStyles };

  const goToTeam = () => {
    //console.log(`REDIRECCIONANDO A ${team.name}`);
    navigation.navigate("Players", { teamId: team.id, teamName: team.name });
  };

  return (
    <TouchableWithoutFeedback onPress={goToTeam}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${team.id}`.padStart(2, 0)}</Text>
            {loading ? (
              <ActivityIndicator style={styles.loadingMessage} size={"small"} /> //not being used in this case
            ) : null}
            {imageError && <Text style={styles.loadingMessage}>X</Text>}
            <Image
              source={{ uri: team.image }}
              style={styles.image}
              onError={() => setImageError(true)}
            />
            <Text style={styles.name}>{team.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 70,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 15,
    padding: 5,
    alignItems: "center",
    //justifyContent: "space-between",
    borderColor: "#f0dc8a",
    borderWidth: 1,
  },
  number: {
    position: "absolute",
    right: 10,
    bottom: 10,
    color: "#fff",
    fontSize: 11,
  },
  image: {
    width: 50,
    height: 50,
  },
  loadingMessage: {
    color: "#fff",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "white",
    marginRight: -35,
    marginLeft: 15,
    padding: 2,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    left: 20,
  },
});

export default TeamCard;
