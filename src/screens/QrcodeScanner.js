import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationContainer } from '@react-navigation/native';


export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // setScanned(true);
    navigation.navigate("memberprofile")
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.brcode}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      </View>

      <View style={styles.listunder}>
        {/* <View style={styles.line}></View> */}
        <View style={styles.under}>
          <Text style={styles.txt5}>Want to share your contact?</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send QR</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#fff',
    
  },
  brcode:{
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  // barCodeView: {
  //   width: '100%', 
  //   height: '50%', 
  //   marginBottom: 40
  // },
  line:{
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    marginTop: 15,  
  },
  under:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txt5:{
    marginLeft: 10,
    marginTop: 15,
    fontFamily:'Gill Sans',
    fontSize: 20,
    // alignItems:'center',
    // justifyContent: 'center',
  },
  button: {
    width:80,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 3,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#ed125f",
    borderWidth: 1,
},

  listunder:{
  
    
  },

  buttonText: {
    color: "#ed125f",
    fontSize: 15,
    textTransform: "none",
    fontFamily:'Helvetica',
  },
}); 