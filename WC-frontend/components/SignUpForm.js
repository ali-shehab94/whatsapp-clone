import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";


const SignUpForm = (props) => {
  return (
    <>
      <Input
        label="First Name"
        icon="user"
        iconPack={AntDesign}
        iconSize={20}
      />

      <Input label="Last Name" icon="user" iconPack={AntDesign} iconSize={20} />

      <Input
        label="Email"
        icon="email"
        iconPack={MaterialIcons}
        iconSize={20}
      />
      <Input
        label="Password"
        icon="onepassword"
        iconPack={MaterialCommunityIcons}
        iconSize={20}
      />

      <SubmitButton
        disabled={true}
        title="Submit"
        onPress={() => console.log("Button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
