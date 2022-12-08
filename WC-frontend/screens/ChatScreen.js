import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import backGroundImage from "../assets/images/droplet.jpg";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../constants/colors";

const ChatScreen = (props) => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = useCallback(() => {
    setMessageText("");
  }, [messageText]);

  return (
    <SafeAreaProvider
      style={styles.container}
      edges={["right, left", "bottom"]}
    >
      <KeyboardAvoidingView style={{flex: 1}} behavior={ Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={100}>
        <ImageBackground
          source={backGroundImage}
          style={styles.backGroundImage}
        ></ImageBackground>

        <View style={styles.inputContainer}>
          <TouchableOpacity title="Camera" style={styles.mediaButtons}>
            <AntDesign name="pluscircleo" size={24} color={colors.blue} />
          </TouchableOpacity>

          <TextInput
            style={styles.textBox}
            value={messageText}
            onChangeText={(text) => {
              setMessageText(text);
            }}
            onSubmitEditing={sendMessage}
          />

          {messageText === "" ? (
            <TouchableOpacity title="Image" style={styles.mediaButtons}>
              <FontAwesome name="camera-retro" size={24} color={colors.blue} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              title="Image"
              style={{ ...styles.mediaButtons, ...styles.sendButton }}
              onPress={sendMessage}
            >
              <MaterialCommunityIcons
                name="cube-send"
                size={20}
                color={"white"}
              />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
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
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 8,
    width: 35,
  },
});

export default ChatScreen;
