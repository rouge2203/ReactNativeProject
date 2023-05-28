import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAllPlayersApi } from "../api/players";
import PlayersList from "../components/PlayersList";
import { API_HOST } from "../utils/constants";

const Players = (props) => {
  const {
    route: { params },
  } = props;

  const [teamPlayers, setTeamPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const teamId = params.teamId;

  useEffect(() => {
    (async () => {
      await loadPlayers();
    })();
  }, []);

  const loadPlayers = async () => {
    try {
      const response = await getAllPlayersApi(teamId);
      //console.log(response);
      const playersArray = [];
      for await (const player of response) {
        let image = `${API_HOST}/players/${player.id}/image`;
        let nationImage = `${API_HOST}/nations/${player.nation}/image`;
        let clubImage = `${API_HOST}/clubs/${player.club}/image`;
        playersArray.push({
          id: player.id,
          name: player.commonName,
          image: image,
          nationImage: nationImage,
          clubImage: clubImage,
          position: player.position,
          rating: player.rating,
          pace: player.pace,
          shooting: player.shooting,
          passing: player.passing,
          dribbling: player.dribbling,
          defending: player.defending,
          physicality: player.physicality,
          league: player.league,
        });
      }
      setTeamPlayers([...teamPlayers, ...playersArray]);
    } catch (error) {
      console.log("Error en loadPlayers --- ", error);
    }
    setIsLoading(false); // Set loading state to false after data has been fetched
  };

  //console.log(teamPlayers);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Text style={{ top: 10 }}>Loading Players</Text>
        </View>
      ) : (
        <PlayersList players={teamPlayers} />
        //<Text>Jugadores de {params.teamName} cargados</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Players;
