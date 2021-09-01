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

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen1 /> */}
      {/* <WelcomeScreen2 /> */}
      {/* <SignScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <ImagePicker /> */}
      {/* <QrScreen /> */}
      {/* <QrcodeScanner /> */}
      {/* <Myprofile /> */}
      <MemberProfile />
      
      
      
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
