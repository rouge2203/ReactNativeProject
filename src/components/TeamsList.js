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
import TeamCard from "./TeamCard";

const TeamsList = (props) => {
  const { backgroundColor, loadTeams, page, teams } = props;

  const loadMoreTeams = () => {
    loadTeams(page);
  };

  return (
    <FlatList
      data={teams}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(team) => String(team.id)}
      renderItem={({ item }) => <TeamCard team={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      style={backgroundColor}
      // onEndReached={() => {
      //   loadMoreTeams();
      // }}
      // onEndReachedThreshold={0.1}
      // ListFooterComponent={
      //   nextTeamsPage && (
      //     <ActivityIndicator size="large" styles={styles.spinner} />
      //   )
      // }
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    paddingBottom: 45,
    marginTop: Platform.OS === "ios" ? 15 : 0,
  },
  spinner: {
    marginTop: 30,
    marginBottom: 200,
  },
});
export default TeamsList;
