import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Button,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const [unvalidCredentials, setUnvalidCredentials] = useState(null);
  const { login } = useAuth();
  //console.log(useAuth());

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (data) => {
      const { username, password } = data;
      if (username !== user.username || password !== user.password) {
        console.log("Login incorrecto");
        setUnvalidCredentials("Unvalid credentials, try again");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View style={styles.content}>
      <Text style={styles.title}>User Login</Text>

      <View style={styles.inputBox}>
        <Icon style={styles.icon} solid name="user" size={18} color="#e09f3e" />
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          value={formik.values.username}
          onChangeText={(text) => {
            formik.setFieldValue("username", text);
            setUnvalidCredentials(null);
          }}
        />
      </View>

      <View style={styles.inputBox}>
        <Icon style={styles.icon} name="lock" size={18} color="#e09f3e" />
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.input}
          value={formik.values.password}
          onChangeText={(text) => {
            formik.setFieldValue("password", text);
            setUnvalidCredentials(null);
          }}
        />
      </View>

      <Button title="Sign In" onPress={formik.handleSubmit} />

      {/* <Text style={styles.error}>{formik.errors.username}</Text>
      <Text>{formik.errors.password}</Text> */}

      {formik.errors.username ? (
        <Text style={styles.error}>{formik.errors.username}</Text>
      ) : formik.errors.password ? (
        <Text style={styles.error}>{formik.errors.password}</Text>
      ) : null}

      <Text style={styles.error}>{unvalidCredentials}</Text>
    </View>
  );
};

const initialValues = () => {
  return {
    username: "",
    password: "",
  };
};

const validationSchema = () => {
  return {
    username: Yup.string().required("Enter username"),
    password: Yup.string().required("Enter password"),
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    marginBottom: 15,
    color: "#9e2a2b",
    alignSelf: "flex-start",
    paddingLeft: 28,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#9e2a2b",
    width: "85%",
    height: 40,
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 17,
  },
  icon: {
    paddingRight: 7,
  },
  error: {
    color: "red",
    top: 15,
    fontSize: 15,
  },
});
export default LoginForm;
