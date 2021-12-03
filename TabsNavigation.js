import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Import Icon
import { Ionicons } from "@expo/vector-icons";

// Import Theme Native Base
import { useTheme } from "native-base";

// Import Screen
import SubData from './src/screens/SubData';
import AllData from './src/screens/AllData';
import Pic from "./src/screens/Pic";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

// Create Component Bottom Tab Navigation
function MyTab() {
  // Init Theme
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="AllData"
      screenOptions={({ route }) => ({
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#bf6a63" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "SubData") {
            iconName = focused ? "list-circle" : "list";
          } else if (route.name === "AllData") {
            iconName = focused ? "list-circle" : "list";
          }
          else if (route.name === "Pic") {
            iconName = focused ? "list-circle" : "list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="AllData" component={AllData}  options={{headerShown: true}} />
      <Tab.Screen name="SubData" component={SubData}  options={{headerShown: true }}/>
      <Tab.Screen name="Pic" component={Pic}  options={{headerShown: true }}/>
    </Tab.Navigator>
  );
}

export default function TabsNavigation() {
  const theme = useTheme();

  return (
    <NavigationContainer>  
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}