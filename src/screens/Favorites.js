import { View, Text, Button } from "react-native";
import React from "react";
import { getFavoritePlayersaApi } from "../api/favorite";

const Favorites = () => {
  const checkFavorites = async () => {
    const response = await getFavoritePlayersaApi();
    console.log(response);
  };

  return (
    <View>
      <Text>Favorites</Text>
      <Button title="ver" onPress={checkFavorites} />
    </View>
  );
};

export default Favorites;
