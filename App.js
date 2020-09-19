import React, { Component } from 'react';
import MovieList from './screen/MovieList'
import MovieDetail from './screen/MovieDetail'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator();
  return (    
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle:{
            backgroundColor:'black',
          },
          headerTintColor:'white',
          headerTitleAlign:'center'
        }
      }>
        <Stack.Screen name='MovieList' option={{title:'Movie List' }}component={MovieList} options={{title:'Movie show time example'}}></Stack.Screen>
        <Stack.Screen name='MovieDetail' option={{title:'Movie Detail' }}component={MovieDetail}options={{title:null}}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

