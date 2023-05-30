import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";

const UserData = () => {
  const { logout, auth } = useAuth();

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>
          Bienvenido,{"\n"}
          {auth.firstName}
        </Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.key}>Nombre:</Text>
        <Text>
          {auth.firstName} {auth.lastName}
        </Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.key}>Username:</Text>
        <Text>{auth.username}</Text>
      </View>

      <View style={[styles.infoBlock, { marginBottom: 30 }]}>
        <Text style={styles.key}>Email:</Text>
        <Text>{auth.email}</Text>
      </View>

      <Pressable onPress={logout}>
        <Text style={styles.boton}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  titleBlock: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoBlock: {
    marginTop: 30,
    paddingBottom: 15,
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  key: {
    fontWeight: "bold",
    width: 90,
  },
  boton: {
    alignSelf: "center",
    textAlign: "center",
    width: 125,
    height: 36,
    backgroundColor: "#9E2A2B",
    borderRadius: 5,
    color: "white",
    paddingTop: 7,
  },
});

export default UserData;
