import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import Home from './screens/Home';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Space Crafts' component={SpaceCrafts}/>
        <Stack.Screen name="Daily Pic" component={DailyPic} />
        <Stack.Screen name="Star Map" component={StarMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}