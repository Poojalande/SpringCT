//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './src/Screen/Login';
import StackNav from './src/screenNav/StackNav';
import { store } from './src/storageRedux/Store';
import { Provider, useSelector } from 'react-redux'
// create a component
const MyComponent = () => {


  return (
    <Provider store={store}>
      <StackNav />
    </Provider>
  )
};



//make this component available to the app
export default MyComponent;
