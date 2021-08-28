import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';
import SignScreen from './src/screens/SignScreen';
import WelcomeScreen1 from './src/screens/WelcomeScreen1';
import ImagePicker from './src/screens/ImagePicker';
import QrScreen from './src/screens/QrScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen1 /> */}
      {/* <WelcomeScreen2 /> */}
      {/* <SignScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <ImagePicker /> */}
      <QrScreen />
      
      
      <StatusBar style="auto" />
    </View>
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
