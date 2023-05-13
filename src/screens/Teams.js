import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Appearance,
} from "react-native";
import React, { useState, useEffect } from "react";
//import { getTeamsApi } from "../api/teams";
import TeamsList from "../components/TeamsList";
import { API_HOST } from "../utils/constants";

const Teams = (props) => {
  const {
    navigation,
    route: { params },
  } = props;

  const leagueId = params.id;
  const [teams, setTeams] = useState([]); // teams = [], setTeams modifies teams.
  const [page, setPage] = useState(2);

  useEffect(() => {
    // loadTeams will be executed after the component renders and after every re-render, unless you provide a dependency array (second parameter) that specifies when the effect should run.
    (async () => {
      //await loadTeams();
    })();
  }, []); //In this case, the dependency array [] is empty, which means the effect will only run once

  // const loadTeams = async () => {
  //   try {
  //     const response = await getTeamsApi();
  //     let teamsArray = response.map((team) => {
  //       return { ...team, image: `${API_HOST}/clubs/${team.id}/image` };
  //     });

  //     setTeams([...teams, ...teamsArray]); //setTeams with whatever is there and push new teamsArray content
  //   } catch (error) {
  //     console.log("loadTeams in Teams.js (Screens) --- ", error);
  //   }
  // };

  const colorScheme = Appearance.getColorScheme();
  const backgroundColor = colorScheme === "dark" ? "black" : "white";
  const StatusbackgroundColor = colorScheme === "dark" ? "black" : "white";
  const Statuscolor =
    StatusbackgroundColor === "black" ? "light-content" : "dark-content";

  return (
    <View style={{ backgroundColor: backgroundColor }}>
      <StatusBar
        backgroundColor={StatusbackgroundColor}
        barStyle={Statuscolor}
      />
      <TeamsList
        backgroundColor={backgroundColor}
        //loadTeams={loadTeams}
        //page={page}
        teams={params.filteredTeams}
      />
    </View>
  );
};

export default Teams;
