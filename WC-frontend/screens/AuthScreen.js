import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import PageContainer from "../components/PageContainer";

const AuthScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <Input
          label="First Name"
          icon="user"
          iconPack={AntDesign}
          iconSize={20}
        />

        <Input
          label="Last Name"
          icon="user"
          iconPack={AntDesign}
          iconSize={20}
        />

        <Input label="Email" icon="email" iconPack={MaterialIcons} iconSize={20} />
        <Input label="Password" icon="onepassword" iconPack={MaterialCommunityIcons} iconSize={20} />
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AuthScreen;
