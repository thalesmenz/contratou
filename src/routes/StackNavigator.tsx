import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../screens/loginPage";
import FilterPage from "../screens/filterPage";
import SignUpPage from "../screens/SignUpPage";
import PathPage from "../screens/pathPage";
import JobPage from "../screens/jobPage";
import WorkersPage from "../screens/WorkersPage";
import ProfileWorker from "../screens/profileWorkerPage"

const Stack = createStackNavigator()

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="FilterLocation" component={FilterPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpPage} options={{ headerShown: false }} />
        <Stack.Screen name="PathJob" component={PathPage} options={{ headerShown: false }} />
        <Stack.Screen name="Job" component={JobPage} options={{ headerShown: false }} />
        <Stack.Screen name="WorkersList" component={WorkersPage} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileWorker" component={ProfileWorker} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}