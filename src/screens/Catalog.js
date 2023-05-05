import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Appearance,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getLeaguesApi, getLeaguesLogoByUrlApi } from "../api/leagues";
import LeaguesList from "../components/LeaguesList";
import { API_HOST } from "../utils/constants";
//import worldCupImage from "../assets/WorldCupLogo.png";

export default function Catalog() {
  const [leagues, setLeagues] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    (async () => {
      await loadLeagues();
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

  const colorScheme = Appearance.getColorScheme();
  const backgroundColor = colorScheme === "dark" ? "black" : "white";
  const StatusbackgroundColor = colorScheme === "dark" ? "black" : "white";
  const Statuscolor =
    StatusbackgroundColor === "black" ? "light-content" : "dark-content";
  //console.log(colorScheme);

  return (
    <View style={{ backgroundColor: backgroundColor }}>
      <StatusBar
        backgroundColor={StatusbackgroundColor}
        barStyle={Statuscolor}
      />
      <LeaguesList
        leagues={leagues}
        loadLeagues={loadLeagues}
        isNext={nextPage}
        backgroundColor={backgroundColor}
      />
    </View>
  );
}
