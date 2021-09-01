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

          
          <View style= {styles.imageContainer} >
               
               <Image 
                  style= {styles.image}
                  source ={require('../../assets/Dave.jpg')}
               />
            <View>
               <Text style={styles.txt3}>Santan Dave</Text>
               <Text style={styles.txt4}>Head of Marketing</Text>
            </View>
           </View>
          

        </View>

        
      <View>
        <View style={styles.line}></View>
        <View style={styles.under}>
          <Text style={styles.txt5}>Want to add a new connection?</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Scan QR</Text>
            </TouchableOpacity>
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
    marginTop: 30,
  },
  txt1:{
    fontSize: 24,
    fontFamily: 'Gill Sans',
  },
  txt2:{
    color: 'grey',
    fontSize: 20,
    marginVertical: 10,
  },
  qrcode:{
    flex: 0.2,
    marginTop: 70,
    marginLeft: 10,
  },
  imageContainer: {
    marginTop: 55,
    flex: 0.3,
    alignSelf:'flex-start',
    flexDirection: 'row',
  },
image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  txt3:{
    fontSize:20,
    marginTop: 8,
    marginLeft: 10,
    fontFamily: 'Kailasa',
  },
  txt4:{
    fontSize: 18,
    marginLeft: 10,
    marginTop: 5,
    fontFamily:'Kailasa',
    color: 'grey',
  },
  line:{
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    marginTop: 15,  
  },
  under:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  txt5:{
    marginLeft: 10,
    marginTop: 15,
    fontFamily:'Gill Sans',
    fontSize: 18,
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

  buttonText: {
    color: "#ed125f",
    fontSize: 15,
    textTransform: "none",
    fontFamily:'Helvetica',
  },
})
