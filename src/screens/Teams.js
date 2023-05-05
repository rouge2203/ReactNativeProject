import { View, Text, StatusBar } from "react-native";
import React from "react";

const Teams = (props) => {
  const {
    navigation,
    route: { params },
  } = props;
  const leagueId = params.id;
  return (
    <View>
      <Text>League Id: {leagueId}</Text>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

export default Teams;
