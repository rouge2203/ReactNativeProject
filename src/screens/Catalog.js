import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Appearance,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getLeaguesApi, getLeaguesLogoByUrlApi } from "../api/leagues";
import { getAllTeamsApi } from "../api/teams";
import LeaguesList from "../components/LeaguesList";
import { API_HOST } from "../utils/constants";

export default function Catalog() {
  const [leagues, setLeagues] = useState([]);
  const [allTeams, setAllTeams] = useState([]); // teams = [], setTeams modifies teams.
  const [nextPage, setNextPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    (async () => {
      await loadLeagues();
      await loadAllTeams();
    })();
  }, []);

  const loadLeagues = async () => {
    try {
      const response = await getLeaguesApi(nextPage);
      let currentPage = response.pagination.pageCurrent;
      if (currentPage == 1) {
        setNextPage(`${API_HOST}/leagues?page=2`);
      } else if (currentPage == 2) {
        setNextPage(`${API_HOST}/leagues?page=3`);
      } else {
        setNextPage(null);
      }

      const leaguesArray = [];
      for await (const liga of response.items) {
        let name = liga.name;
        let image = `${API_HOST}/leagues/${liga.id}/image`;
        if (name.includes("(")) {
          name = liga.name.substring(0, liga.name.indexOf("(")).trim();
        }
        if (liga.id === 0) {
          name = "FIFA Legends";
        }
        leaguesArray.push({
          id: liga.id,
          name: name,
          image: image,
        });
      }

      setLeagues([...leagues, ...leaguesArray]);
    } catch (error) {
      console.error(error);
    }
  };

  const loadAllTeams = async () => {
    try {
      const response = await getAllTeamsApi();
      // let allTeamsArray = response.map((team) => {
      //   return { ...team, image: `${API_HOST}/clubs/${team.id}/image` };
      // });
      setAllTeams([...allTeams, ...response]); //setTeams with whatever is there and push new teamsArray content
    } catch (error) {
      console.log("loadTeams in Teams.js (Screens) --- ", error);
    }
    setIsLoading(false); // Set loading state to false after data has been fetched
  };

  const colorScheme = Appearance.getColorScheme();
  const backgroundColor = colorScheme === "dark" ? "black" : "white";
  const StatusbackgroundColor = colorScheme === "dark" ? "black" : "white";
  const Statuscolor =
    StatusbackgroundColor === "black" ? "light-content" : "dark-content";

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <StatusBar
        backgroundColor={StatusbackgroundColor}
        barStyle={Statuscolor}
      />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Text style={{ top: 10 }}>Loading Ultimate Cards</Text>
        </View>
      ) : (
        <LeaguesList
          leagues={leagues}
          allTeams={allTeams}
          loadLeagues={loadLeagues}
          isNext={nextPage}
          backgroundColor={backgroundColor}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
