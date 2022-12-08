import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";

import { AntDesign } from "@expo/vector-icons";

const Input = (props) => {
  return (
    <View style={StyleSheet.container}>
      <Text>{props.label}</Text>

      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 15}
            style={styles.icon}
          />
        )}
        <TextInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: colors.offWhite,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: colors.grey,
  },
});

export default Input;
