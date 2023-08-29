import React from "react";
import { View, StyleSheet, Text,  } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";

//Screens
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
//BottomScreens
import Home from './src/screens/bottomTab/Home'
import Categories from './src/screens/bottomTab/Categories'
import Notification from './src/screens/bottomTab/Notification'
import Profile from './src/screens/bottomTab/Profile'
import MyCart from './src/screens/bottomTab/MyCart'


const Stack = createNativeStackNavigator();

export default function App() {
  return(
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name="MyBottomTab" component={MyBottomTab} options={{headerShown:false}}/>
      </Stack.Navigator>
   </NavigationContainer>
  
  )
}

const BottomTab = createBottomTabNavigator();

function MyBottomTab () {
  return(
    <BottomTab.Navigator
    screenOptions={{
      tabBarActiveTintColor:'#5b9cd9',
      tabBarStyle: {
        position: 'absolute',
        bottom:5,
        right:5,
        height: 50,                    
        borderRadius: 25
      
    }}}
    >
      <BottomTab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home' , headerShown: false,  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),}}
      />
      <BottomTab.Screen name="Categories" component={Categories} options={{tabBarLabel: 'Categories' , headerShown: false,  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="animation-outline" color={color} size={size} />
                  ),}}/>
      <BottomTab.Screen name="Notification" component={Notification} options={{tabBarLabel: 'Notification' , headerShown: false,  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bell-outline" color={color} size={size} />
                  ),}}/>
      <BottomTab.Screen name="Profile" component={Profile} options={{tabBarLabel: 'Profile' , headerShown: false,  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
                  ),}}/>
      <BottomTab.Screen name="MyCart" component={MyCart} options={{tabBarLabel: 'MyCart' , headerShown: false,  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
                  ),}}/>
    </BottomTab.Navigator>
  )
}