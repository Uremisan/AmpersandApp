import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import { QRCode } from 'react-native-custom-qr-codes-expo';


const QrScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.maincontainer}>
        

        <View style={styles.lgcontain}>
          <Text style={styles.txt1}>
            Exchange Contact Information
          </Text>
          <Text style={styles.txt2}>
            Scan this QR below to share your contacts
          </Text>
          
          <View style={styles.qrcode}>
          <QRCode content='No Content' />
          </View>
        </View>

      
          
       
      
      </ScrollView>

    </SafeAreaView>
  )
}

export default QrScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  maincontainer:{
    flex:0.4,
    marginHorizontal: 35,
    marginVertical: 30,
  },
  txt1:{
    fontSize: 24,
    fontFamily: 'Gill Sans',
  },
  txt2:{
    color: 'grey',
    fontSize: 20,
    marginVertical: 5,
  },
  qrcode:{
    flex: 0.2,
    // alignItems: 'center',
    // justifyContent:"center",
  }
})
