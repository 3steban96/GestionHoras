import React from "react";
import { View, StatusBar, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screen/Home/Home.jsx"
import Files from "../Screen/Files/File.jsx"
import User from "../Screen/User/User.jsx"
import Icon from 'react-native-vector-icons/FontAwesome';
// Pantallas


// Crear el navegador de pestañas (BottomTabNavigator)
const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (    
    <View style={{ flex: 1 }}>
      <StatusBar hidden backgroundColor="rgba(221,181,181,1)" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Inicio') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'file-o' : 'file-o';
              }else if (route.name === "Calendario") {
                iconName = focused ? "calendar" : "calendar";
              }else if (route.name === "Perfil") {
                iconName = focused ? "user" : "user";
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#71d2d4',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Perfil" component={User} options={{headerShown:false}} />
          <Tab.Screen name="Inicio" component={Home} options={{headerShown:false}} />
          <Tab.Screen name="Calendario" component={Files} options={{headerShown:false}} />
          
        </Tab.Navigator>
    </View>
  );
};

export default NavBar;

