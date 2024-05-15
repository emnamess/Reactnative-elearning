import React from 'react';
import Home from './screens/Home';
import Signup from './screens/Signup';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Navigation/appNavigation';

export default function App() {
  return (
    <>
    <MyStack/>
    </>
  );
}
 