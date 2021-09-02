import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';
import SignScreen from './src/screens/SignScreen';
import WelcomeScreen1 from './src/screens/WelcomeScreen1';
import ImagePicker from './src/screens/ImagePicker';
import QrScreen from './src/screens/QrScreen';
import QrcodeScanner from './src/screens/QrcodeScanner';
import WelcomeScreen2 from './src/screens/WelcomeScreen2';
import Myprofile from './src/screens/Myprofile';
import MemberProfile from './src/screens/MemberProfile';
import { AntDesign } from '@expo/vector-icons';

import {NavigationContainer} from '@react-navigation/native'

import { createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator ();

export default function  App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
					// header: () => null,
					headerStyle: {
						backgroundColor: 'red',
					},
					headerTitleStyle: {
						color: 'white',
					},
				}} >
        <Stack.Screen options={{ header: () => null }} name="Home" component={WelcomeScreen1}/>
        <Stack.Screen options={{ header: () => null }}name="GetStarted" component={WelcomeScreen2} />

        <Stack.Screen options={{
          title:'Sign Up',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}
        name="Sign Up"
        component={RegisterScreen}/>
        
        <Stack.Screen options={{
          title:'Sign In',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {
            color: 'white',
          },
        }} name="Sign In" component={SignScreen}/>

        <Stack.Screen options={({ navigation}) => {
          return {
              headerRight: () => {
                return (
              
                <TouchableOpacity 	onPress={() =>
                  navigation.navigate('myprofile')
                }>
                  <View style={styles.tch}>
                    <AntDesign name="user" size={20} color="white"  />
                  </View>
                </TouchableOpacity>
              
                );
              },
          };
        }}name="Ampersand" component={QrScreen}/>
        <Stack.Screen name="Scan" component={QrcodeScanner}/>
        <Stack.Screen options={{
          title:'My Profile',
        }}name="myprofile" component={Myprofile}/>
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
  tch:{
    marginRight: 30,
  },
});
