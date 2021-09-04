import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagePicker from "./ImagePicker";

const RegisterScreen = () => {
  const [image, setImage] = useState(null);

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}></TouchableWithoutFeedback>
    <ScrollView style={styles.container}>
      <View>
        <ImageBackground style={styles.imgpic} source={{ uri: image }}>
          <ImagePicker setImage={setImage} />
        </ImageBackground>

        <KeyboardAwareScrollView>
          <View style={styles.maincontainer}>
            <View style={styles.subcontainer}>
              <View style={styles.tch1}>
                <Text style={styles.txt1}>Full Name</Text>
                <TextInput
                  textAlign={"right"}
                  placeholder="Enter your full name"
                  style={styles.input}
                ></TextInput>
              </View>
              <View style={styles.line}></View>
            </View>

            <View>
              <View style={styles.tch1}>
                <Text style={styles.txt1}>Email</Text>
                <TextInput
                  textAlign={"right"}
                  placeholder="Enter your email"
                  style={styles.input}
                ></TextInput>
              </View>
              <View style={styles.line}></View>
            </View>

            <View>
              <View style={styles.tch1}>
                <Text style={styles.txt1}>Phone Number</Text>
                <TextInput
                  textAlign={"right"}
                  placeholder="Enter your phone number"
                  style={styles.input}
                ></TextInput>
              </View>
              <View style={styles.line}></View>
            </View>

            <View>
              <View style={styles.tch1}>
                <Text style={styles.txt1}>Role</Text>
                <TextInput
                  textAlign={"right"}
                  placeholder="Enter your role"
                  style={styles.input}
                ></TextInput>
              </View>
              <View style={styles.line}></View>
            </View>

            <View>
              <View style={styles.tch1}>
                <Text style={styles.txt1}>Twitter</Text>
                <TextInput
                  textAlign={"right"}
                  placeholder="Enter your twitter account"
                  style={styles.input}
                ></TextInput>
              </View>
              <View style={styles.line}></View>
            </View>

            <View>
              <View style={styles.tch1}>
                <Text style={styles.txt1}>LinkedIn</Text>
                <TextInput
                  textAlign={"right"}
                  placeholder="Enter your LinkedIn account"
                  style={styles.input}
                ></TextInput>
              </View>

              <View style={styles.line}></View>
            </View>
          </View>
        
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between'
  },
  imgpic: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    // backgroundColor: 'blue'
  },
  maincontainer: {
    flex: 0.5,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    height: 350,
    // backgroundColor: 'red'
  },
  // formcontainer: {
  //   marginHorizontal: 30,
  //   marginTop: 30,
  // },
  btnContainer: {
    flex: 0.1,
    // backgroundColor: 'green',
    alignItems: "center",
  },
  tch: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tch1: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  input: {
    flex: 1,
  },
  // form: {
  //   marginTop: 30,
  // },
  line: {
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
    marginTop: 10,
  },

  txt1: {
    fontSize: 20,
    flex: 0.5,
  },
  button: {
    width: 325,
    height: 55,
    backgroundColor: "#ed125f",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 22,
    textTransform: "none",
    fontFamily: "Helvetica",
  },
});
