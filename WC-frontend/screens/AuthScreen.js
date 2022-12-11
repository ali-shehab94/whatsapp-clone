import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import colors from "../constants/colors";

import logo from "../assets/images/chatquestion2.png";

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView>
            <View style={styles.imageContainer}>
              <Image source={logo} style={styles.image} resizeMode="contain" />
            </View>

            {isSignUp ? <SignUpForm /> : <SignInForm />}

            <TouchableOpacity
              onPress={() => setIsSignUp((prevState) => !prevState)}
              style={styles.linkContainer}
            >
              <Text style={{alignSelf: 'center', color: colors.blue}}>{`Switch to ${isSignUp ? "Sign in" : "Sign up"}`}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    justifyContent: "center",
    alighItems: "center",
    marginVertical: 15,
  },
  link: {
    color: colors.blue,
    fontFamily: "medium",
    letterSpacing: 0.3,
  },
  imageContainer: {
    height: 190,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
  },
});

export default AuthScreen;
