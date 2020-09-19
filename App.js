import React, { Component } from 'react';
import MovieList from './screen/MovieList'
import MovieDetail from './screen/MovieDetail'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator();
  return (    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MovieList' option={{title:'Movie List' }}component={MovieList}></Stack.Screen>
        <Stack.Screen name='MovieDetail' option={{title:'Movie Detail' }}component={MovieDetail}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

