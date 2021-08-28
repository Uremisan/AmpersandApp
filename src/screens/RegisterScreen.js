import React,{useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import ImagePicker from './ImagePicker';

const RegisterScreen = () => {
  const [image, setImage] = useState(null);

  return (

    <ScrollView style={styles.container}>

      <ImageBackground style={styles.imgpic} source={{ uri: image }}>
        <ImagePicker setImage={setImage} />
      </ImageBackground>

      <View style={styles.maincontainer}>

        <View></View>


        <View style={styles.formcontainer}>
          <View style={styles.form}>
          <View style={styles.tch}>
            <Text style={styles.txt1}>Full Name</Text>
            <TextInput placeholder = 'Enter your full name' style={styles.input}>
            </TextInput>
          </View>
          <View style={styles.line}></View>

          <View style={styles.tch1}>
            <Text style={styles.txt1}>Email</Text>
            <TextInput placeholder = 'Enter your email' style={styles.input}>
            </TextInput>
          </View>
          <View style={styles.line}></View>

          <View style={styles.tch1}>
            <Text style={styles.txt1}>Phone Number</Text>
            <TextInput placeholder = 'Enter your phone number' style={styles.input}>
            </TextInput>
          </View>
          <View style={styles.line}></View>

          <View style={styles.tch1}>
            <Text style={styles.txt1}>Role</Text>
            <TextInput placeholder = 'Enter your role' style={styles.input}>
            </TextInput>
          </View>
          <View style={styles.line}></View>

          <View style={styles.tch1}>
            <Text style={styles.txt1}>Twitter</Text>
            <TextInput placeholder = 'Enter your twitter account' style={styles.input}>
            </TextInput>
          </View>
          <View style={styles.line}></View>

          

          <View style={styles.tch1}>
            <Text style={styles.txt1}>LinkedIn</Text>
            <TextInput placeholder = 'Enter your LinkedIn account' style={styles.input}>
            </TextInput>
          </View>
          <View style={styles.line}></View>

          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </View>



          </View>
        </View>
      </View>


    </ScrollView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imgpic:{
    marginTop: 50,
    flex:0.4,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: 35,
  },
  maincontainer:{
    flex:0.6,
  },
  formcontainer:{
    marginHorizontal: 30,
    marginTop: 30,
  },
  tch:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  tch1:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop: 15,
  },
  form:{
    marginTop: 30,
  },
  line:{
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    marginTop: 15,
  },

  txt1:{
    fontSize: 20,
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
})
