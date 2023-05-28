import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

const PlayersList = (props) => {
  const { players } = props;

  return (
    <FlatList
      data={players}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      keyExtractor={(player) => String(player.id)}
      renderItem={({ item }) => <PlayerCard player={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
    //<Text>Hola desde players List</Text>
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    flexGrow: 1,
    alignContent: "center",
    marginTop: 5,
    paddingBottom: 40,
  },
});

export default PlayersList;
