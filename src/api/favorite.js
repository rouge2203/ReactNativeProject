import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export const getFavoritePlayersaApi = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || []);
  } catch (error) {
    throw error;
  }
};

export const addFavoritePlayerApi = async (player) => {
  try {
    const favorites = await getFavoritePlayersaApi();
    favorites.push(player);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
};

export const isPlayerFavoriteApi = async (player) => {
  try {
    const response = await getFavoritePlayersaApi();
    return includes(response, player); // This return true if finds player, false if not
  } catch (error) {
    throw error;
  }
};
