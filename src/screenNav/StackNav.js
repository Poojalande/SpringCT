//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Login from '../Screen/Login';
import Home from '../Screen/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddEmployee from '../Screen/AddEmployee';
import {UseSelector, useSelector} from 'react-redux';

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeftLabelVisible: false,
          headerTintColor: 'black',
        }}
      />
      <Stack.Screen
        name="AddEmployee"
        component={AddEmployee}
        options={{
          headerLeftLabelVisible: false,
          headerTintColor: 'black',
        }}
      />
    </Stack.Navigator>
  );
};
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
// create a component
const StackNav = () => {
  const token = useSelector(state => state.AuthReducers?.authToken);
  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <RootStack />}
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default StackNav;
