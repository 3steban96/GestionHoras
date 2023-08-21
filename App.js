import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from './src/components/NavBar/NavBar.jsx';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="NavBar"
        options={{headerShown:false}} 
        component={NavBar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  }