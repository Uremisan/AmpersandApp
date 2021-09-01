import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'

const SignScreen = ({ navigation }) => {
  const handleOnPress = () => {
    navigation.navigate ('Ampersand')
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.maincontainer}>

        <View style={styles.Imagecontainer}>
          <Image style={styles.Image}          source ={require('../../assets/l2.jpg')}>
          </Image>
        </View>

        <View style={styles.textcontainer}>
          <View style={styles.tch}>
            <Text style={styles.txt1}>Email</Text>
            <TextInput placeholder = 'Enter your email' style={styles.input}>
            </TextInput>
          </View>
          <View style={styles.line}></View>

          <View style={styles.tch2}>
            <Text style={styles.txt1}>Password</Text>
            <TextInput placeholder = 'Enter Password' style={styles.input}>
            </TextInput>
          </View>
          <View>
            <TouchableOpacity onPress={handleOnPress} style={styles.button}>
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.navcontainer}>
          <View style={styles.nav}>
            <Text>Forgot?</Text>
            <TouchableOpacity style={styles.tch11}>
              <Text style={styles.tchtext1}>Reset Password</Text>
              <View style={styles.lines}>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </View>



      </View>
    </ScrollView>
  )
}

export default SignScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  maincontainer:{
    flex:1,
  },
  Image:{
    height: 280,
    width: 400,
  },
  textcontainer:{
    marginHorizontal: 25,
    marginTop: 70,
  },
  tch:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  // input:{
  //   alignItems:"center",
  //   justifyContent:"center",
  // },
  txt1:{
    fontSize: 20,
  },
  line:{
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    marginTop: 10,
  },
  tch2:{
    marginTop: 10,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  button: {
    width:325,
    height: 55,
    backgroundColor: '#ed125f',
    borderRadius: 5,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
},

  buttonText: {
    color: "white",
    fontSize: 22,
    textTransform: "none",
    fontFamily:'Helvetica',
  },
  navcontainer:{
    marginTop: 30,
  },
  nav:{
    flexDirection: "row",
    
  },
  tchtext1:{
    paddingLeft:5,
  },
  lines:{
    borderBottomWidth: 2,
    borderBottomColor: '#db2009',
    marginTop: 3,
    marginLeft:5,
  }
})
