// ORIGINAL DE CURSO
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import LeagueCard from "./LeagueCard";

const LeaguesList = (props) => {
  const { leagues, loadLeagues, isNext, backgroundColor } = props;

  const loadMore = () => {
    loadLeagues();
  };
  return (
    <FlatList
      data={leagues}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(league) => String(league.id)}
      renderItem={({ item }) => <LeagueCard liga={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      style={backgroundColor}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && <ActivityIndicator size="large" styles={styles.spinner} />
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    paddingBottom: 45,
    marginTop: Platform.OS === "ios" ? 35 : 0,
  },
  spinner: {
    marginTop: 30,
    marginBottom: 200,
  },
});
export default LeaguesList;
