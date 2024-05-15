import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import VerificationScreen from '../screens/VerificationScreen';
import Welcome from '../screens/Welcome';
import Allcategories from '../screens/Allcategories';
import Allcourses from '../screens/Allcourses';
import Profile from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import Calender from '../screens/Calender';
import Mycourses from '../screens/Mycourses';
import { Feather } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings-sharp" size={size} color={color} />
        ),
        
        }} />
      <Tab.Screen name="Calender" component={Calender}options={{ headerShown: false,tabBarIcon: ({ color, size }) => (
         <AntDesign name="calendar" size={size} color={color}/>
        ) }}  />
      <Tab.Screen name="Profile" component={Profile}options={{
         headerShown: false,
         tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        )
      }}  />
      <Tab.Screen name="Mycourses" component={Mycourses} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
          <Feather name="list" size={size} color={color} />
        ) }} />


    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome" >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
      <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={Welcome}  options={{ headerShown: false }} />
      <Stack.Screen name="Allcategories" component={Allcategories}  options={{ headerShown: false }} />
      <Stack.Screen name="Allcourses" component={Allcourses}  options={{ headerShown: false }} />
      <Stack.Screen name="MyTabs" component={MyTabs}  options={{ headerShown: false }} />





    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack
