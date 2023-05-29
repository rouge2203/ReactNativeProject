import { View, Text } from "react-native";
import React from "react";
import styles from "./stylesheets/Stats_Stylesheet";

const Stats_ChildAttributes = (props) => {
  const { childAttributes, attribute, attributeRating } = props;
  return (
    <View style={styles.attributeBlock}>
      <View style={styles.attributeInfo}>
        <Text style={styles.attributeTitle}>{attribute}</Text>
        <Text style={styles.attributeTitle}>{attributeRating}</Text>
      </View>

      {Object.entries(childAttributes).map(([key, value], index) => {
        return (
          <React.Fragment key={index}>
            <View style={styles.childAttributeTitleBlock}>
              <Text style={styles.childAttributeTitle}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Text>
            </View>

            <View style={styles.attributePercentageBlock}>
              <Text style={styles.percentageTitle}>{value}%</Text>
              <View style={styles.barBg}>
                <View style={[styles.barFill, { width: `${value}%` }]}></View>
              </View>
            </View>
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default Stats_ChildAttributes;
