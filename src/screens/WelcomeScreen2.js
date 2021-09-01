import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

const WelcomeScreen2 = ({ navigation}) => {
  const handleOnPress = () => {
    navigation.navigate ('Sign Up')
  };
  const handleSignIn = () => {
    navigation.navigate ('Sign In')
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.maincontainer}>
       <View style={styles.imagecontainer}>
          <Image style={styles.Image}          source ={require('../../assets/l1.jpg')}>
          </Image>
        </View>

        <View style={styles.txtcontainer}>
          <View style={styles.txtcon}>
            
            <Text style={styles.txt}>
              KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND
            </Text>

            <Text style={styles.txt2}>
              Sign in or register with your Ampersand email
            </Text>
          </View>

        </View>

        <View style={styles.navcontainer}>
          <View style={styles.tch}>
            <TouchableOpacity onPress={handleOnPress} style={styles.tch1}>
              <Text style={styles.tchtext1}>REGISTER</Text>
              <View style={styles.line}>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignIn}  style={styles.tch2}>
            <Text style={styles.tchtext2}>SIGN IN</Text>
              <View style={styles.line}>
              </View>
            </TouchableOpacity>
              
            
          </View>
          </View>

      </View>

    </ScrollView>
  )
}

export default WelcomeScreen2

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  maincontainer:{
    flex: 1,
  },
  // imagecontainer:{

  // }
  Image:{
    height: 380,
    width: 400,
  },
  txtcontainer:{
    marginHorizontal: 20,
    marginTop: 22,
  },
  txtcon:{
    alignItems:'flex-start',
  },
  txt:{
    fontSize: 21,
    fontFamily: "Futura",  
  },
  txt2:{
    marginTop: 17,
    fontSize: 17,
  },
  navcontainer:{
   marginTop: 200,
   marginHorizontal: 30,
  },
  tch:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal: 20,
  },
  tchtext1:{
    fontSize: 20,
    fontFamily:'Gill Sans'
  },
  line:{
    borderBottomWidth: 2,
    borderBottomColor: '#db2009',
    marginTop: 3,
  },
  tchtext2:{
    fontSize: 20,
    fontFamily:'Gill Sans' 
  },
})
