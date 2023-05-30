import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header2 from "../components/PlayerDetail/Header2";
import Stats from "../components/PlayerDetail/Stats";
import { getPlayerDetailApi } from "../api/playerDetail";
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorite from "../components/PlayerDetail/Favorite";
import useAuth from "../hooks/useAuth";

const PlayerDetail = (props) => {
  const {
    navigation,
    route: { params },
  } = props;

  const playerId = params.playerId;
  const playerImage = params.playerImage;
  const playerNationImage = params.playerNationImage;
  const playerClubImage = params.playerClubImage;

  const [playerInfo, setPlayerInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const { auth } = useAuth();

  useEffect(() => {
    (async () => {
      await loadPlayer();
    })();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite player={playerInfo} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#540b0e"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, auth, playerInfo]);

  const loadPlayer = async () => {
    try {
      const response = await getPlayerDetailApi(playerId);
      setPlayerInfo(response);
      setLoading(false);
    } catch (error) {
      console.log("Error in loadPlayer in screen ---", error);
      throw error;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading || !playerInfo ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" style={{ marginBottom: 10 }} />
          <Text>Loading Player</Text>
        </View>
      ) : (
        <ScrollView>
          <SafeAreaView style={styles.content}>
            <View>
              <Header2
                player={playerInfo}
                playerImage={playerImage}
                playerClubImage={playerClubImage}
                playerNationImage={playerNationImage}
              />
              <Stats player={playerInfo} />
            </View>
          </SafeAreaView>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginBottom: 40,
    marginTop: 20,
  },
});

export default PlayerDetail;
