import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import backGroundImage from "../assets/images/droplet.jpeg";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors"

const ChatScreen = (props) => {
  return (
    <SafeAreaProvider
      style={styles.container}
      edges={["right, left", "bottom"]}
    >
      <ImageBackground
        source={backGroundImage}
        style={styles.backGroundImage}
      ></ImageBackground>

      <View style={styles.inputContainer}>
       
      <TouchableOpacity title="Camera" style={styles.mediaButtons}>
          <AntDesign name="pluscircleo" size={24} color={colors.blue} />
        </TouchableOpacity>

        <TextInput style={styles.textBox} />

        <TouchableOpacity title="Image" style={styles.mediaButtons}>
          <FontAwesome name="camera-retro" size={24} color={colors.blue} />
        </TouchableOpacity>
        
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backGroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  buttons: {
    backgroundColor: "blue",
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35
  }
});

export default ChatScreen;
