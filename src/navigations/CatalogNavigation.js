import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CatalogScreen from "../screens/Catalog";
import TeamsScreen from "../screens/Teams";

const Stack = createStackNavigator();

const CatalogNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: "#82110d" }}>
      <Stack.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen name="Teams" component={TeamsScreen} />
    </Stack.Navigator>
  );
};

export default CatalogNavigation;
