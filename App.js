import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';
import SignScreen from './src/screens/SignScreen';
import WelcomeScreen1 from './src/screens/WelcomeScreen1';
import ImagePicker from './src/screens/ImagePicker';
import QrScreen from './src/screens/QrScreen';
import QrcodeScanner from './src/screens/QrcodeScanner';
import WelcomeScreen2 from './src/screens/WelcomeScreen2';
import Myprofile from './src/screens/Myprofile';
import MemberProfile from './src/screens/MemberProfile';

import {NavigationContainer} from '@react-navigation/native'

import { createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ header: () => null }} name="Home" component={WelcomeScreen1}/>
        <Stack.Screen options={{ header: () => null }}name="GetStarted" component={WelcomeScreen2} />
        <Stack.Screen name="Sign Up"
        component={RegisterScreen}/>
        <Stack.Screen name="Sign In" component={SignScreen}/>
        <Stack.Screen name="Ampersand" component={QrScreen}/>
        <Stack.Screen name="Scan" component={QrcodeScanner}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
