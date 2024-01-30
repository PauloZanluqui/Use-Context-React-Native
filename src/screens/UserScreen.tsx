import { useContext } from "react";
import { View, Text } from "react-native";
import { UserContext } from "../contexts/userContext";

export default function UserScreen() {
  const UserContextValue = useContext(UserContext);

  const nome = UserContextValue?.loginName || "Nenhum nome Salvo";
  
  return (
    <View>
      <Text>Bem vindo: {nome}</Text>
    </View>
  );
}
