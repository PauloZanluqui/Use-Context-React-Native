import HomeScreen from "./src/screens/HomeScreen";
import UserScreen from "./src/screens/UserScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserContextProvider from "./src/contexts/userContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </UserContextProvider>
    </NavigationContainer>
  );
}
