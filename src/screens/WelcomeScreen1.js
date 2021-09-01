import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput  } from 'react-native'

const WelcomeScreen1 = ({ navigation }) => {

  const handleOnPress = () => {
    navigation.navigate ('GetStarted')
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.maincontainer}>
        
        <View style={styles.imagecontainer}>
          <Image style={styles.Image}          source ={require('../../assets/ampersand.png')}>
          </Image>
        </View>

        <View style={styles.Text}>
          <View style={styles.textcontainer}>
            <Text style={styles.txt}>AMPERSAND</Text>
            <Text style={styles.txt1}>CONTACTS</Text>
          </View>
          

          <View style={styles.touch}>
            <TouchableOpacity onPress={handleOnPress} style={styles.touchopa}>
            <Text style={styles.touchtxt}>GET STARTED</Text>

            <View style={styles.line}>
            </View>
            </TouchableOpacity>

            
            
            
          </View>


        </View>
      </View>
    </ScrollView>
  )
}

export default WelcomeScreen1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCD1D1',
  },
  maincontainer:{
    flex: 1,
    marginHorizontal: 30,
  },
  imagecontainer: {
    marginTop: 170,
    alignItems: "center",
    
  },
  Image:{
    width: 250,
    height: 68,
  },
  textcontainer:{
    marginTop: 40,
  },
  Text: {
    paddingTop: 100,
    alignItems: 'center',
  },

  txt: {
    fontSize: 26,
    fontFamily: "Gill Sans",
  },
  txt1:{
     fontSize: 24,
     paddingLeft: 10,
     marginTop: 3,
  },
  touch:{
    marginTop: 170,
  },
  // touchopa:{
  //   paddingVertical: 140,
  // },
  touchtxt:{
    fontSize: 20,
    fontFamily: "Gill Sans",
  },
  line:{
    borderBottomWidth: 2,
    borderBottomColor: '#db2009',
    marginTop: 3,
  },

})
