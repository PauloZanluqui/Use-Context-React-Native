import React, { useState, useContext } from "react";
import { View, TextInput, Button } from "react-native";

import { UserContext } from "../contexts/userContext";

import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [inputText, setInputText] = useState("");
  const userContext = useContext(UserContext);

  const { navigate } = useNavigation<any>();

  const navigateToUserScreen = () => {
    userContext?.save(inputText)
    navigate('User')
  }

  return (
    <View>
      <TextInput
        placeholder="Digite seu nome..."
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Logar" onPress={navigateToUserScreen} />
    </View>
  );
}
