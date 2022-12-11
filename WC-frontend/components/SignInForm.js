import React from "react";
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";


const SignInForm = (props) => {
  return (
    <>

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
        disabled={false}
        title="Submit"
        onPress={() => console.log("Button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignInForm;
