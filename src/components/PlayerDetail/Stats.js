import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { map } from "lodash";
import styles from "./stylesheets/Stats_Stylesheet";
import Stats_ChildAttributes from "./Stats_ChildAttributes";

const Stats = (props) => {
  const { player } = props;
  const playerInfo = player.player;
  return (
    <View style={styles.content}>
      {/* <Text style={{ fontSize: 20 }}>Stats</Text> */}

      {/* Attribute Pace Block */}
      <Stats_ChildAttributes
        childAttributes={playerInfo.paceAttributes}
        attribute="Pace"
        attributeRating={playerInfo.pace}
      />

      {/* Attribute Shooting Block */}
      <Stats_ChildAttributes
        childAttributes={playerInfo.shootingAttributes}
        attribute="Shooting"
        attributeRating={playerInfo.shooting}
      />

      {/* Attribute Passing Block */}
      <Stats_ChildAttributes
        childAttributes={playerInfo.passingAttributes}
        attribute="Passing"
        attributeRating={playerInfo.passing}
      />

      {/* Attribute Dribbling Block */}
      <Stats_ChildAttributes
        childAttributes={playerInfo.dribblingAttributes}
        attribute="Dribbling"
        attributeRating={playerInfo.dribbling}
      />

      {/* Attribute Defending Block */}
      <Stats_ChildAttributes
        childAttributes={playerInfo.defendingAttributes}
        attribute="Defending"
        attributeRating={playerInfo.defending}
      />

      {/* Attribute Physicality Block */}
      <Stats_ChildAttributes
        childAttributes={playerInfo.physicalityAttributes}
        attribute="Physicality"
        attributeRating={playerInfo.physicality}
      />
    </View>
  );
};

export default Stats;
