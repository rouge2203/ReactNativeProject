import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image, StatusBar } from "react-native";
import AccountScreen from "../screens/Account";
import FavoritesScreen from "../screens/Favorites";
import CatalogScreen from "../screens/Catalog";

import CatalogNavigation from "./CatalogNavigation";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f0dc8a",
        tabBarInactiveTintColor: "#82110d",
        headerTintColor: "#82110d",
      }}
    >
      <Tab.Screen
        name="My Team"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Team",
          tabBarIcon: ({ color, size }) => (
            <Icon name="users" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="CatalogNav"
        component={CatalogNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderCatalog(),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="My Profile"
        component={AccountScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderCatalog() {
  return (
    <Image
      source={require("../assets/fut-champions.png")}
      style={{ width: 75, height: 85, top: -10 }}
    />
  );
}
