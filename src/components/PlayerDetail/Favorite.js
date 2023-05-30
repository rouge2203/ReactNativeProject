import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addFavoritePlayerApi, isPlayerFavoriteApi } from "../../api/favorite";

const Favorite = (props) => {
  const { player } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPlayerFavoriteApi(player.player.name);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [player, reloadCheck]);

  const onReloadFavorite = () => {
    setReloadCheck((prev) => !prev); //setea al valor contrario
  };

  const addFavorite = async () => {
    try {
      await addFavoritePlayerApi(player.player.name);
      onReloadFavorite();
      console.log("Jugador favorito added");
    } catch (error) {
      console.log("error in Favorite.js --- ", error);
    }
    //await addFavoritePlayerApi(player);
    // console.log(`${player.player.name} addded to Favorites`);
    // console.log("hola");
  };

  const removeFavorite = () => {
    onReloadFavorite();
    console.log("Eliminar de favoritos");
  };

  return (
    <>
      <Icon
        name="star"
        solid={isFavorite}
        color="#e09f3e"
        size={20}
        style={{ marginRight: 20 }}
        onPress={isFavorite ? removeFavorite : addFavorite}
      />
    </>
  );
};

export default Favorite;
