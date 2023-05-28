import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CatalogScreen from "../screens/Catalog";
import TeamsScreen from "../screens/Teams";
import PlayersScreen from "../screens/Players";
import PlayerDetail from "../screens/PlayerDetail";

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
      <Stack.Screen name="Players" component={PlayersScreen} />
      <Stack.Screen
        name="PlayerDetail"
        component={PlayerDetail}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

export default CatalogNavigation;
