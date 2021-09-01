import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const MemberProfile = () => {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.maincontainer}>
        <View style={styles.imgheader}>
          <View style= {styles.imageContainer} >
               
               <Image 
                  style= {styles.image}
                  source ={require('../../assets/Jaden.jpg')}
               />
            <View>
               <Text style={styles.txt3}>Syre Jaden</Text>
               <Text style={styles.txt4}>Sales Executive</Text>
            </View>
          </View>
        </View>

        <View style={styles.social}>
          <View style={styles.socialbtn}>
            <TouchableOpacity>
              <Entypo style={styles.twitter} name="twitter-with-circle" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="linkedin-with-circle" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.phonedetails}>
          <Feather name="phone" size={22} color="black" />
          <Text style={styles.phone}>+233 (456) 612 123</Text>
        </View>

        <View style={styles.emaildetails}>
          <MaterialCommunityIcons name="email-outline" size={22} color="black" />
          <Text style={styles.email}>jaden@gmail.com</Text>
        </View>

        <View style={styles.locationdetails}>
          <EvilIcons name="location" size={22} color="black" />
          <Text style={styles.location}>Streatham, UK</Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  )

}

export default MemberProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maincontainer:{
    flex: 0.5,
    marginHorizontal: 20,
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
  social:{
    marginTop: 20,
  },
  socialbtn:{
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  twitter:{
    marginRight: 10,
  },
  phonedetails:{
    marginTop: 30,
    flexDirection:"row",
  },
  phone:{
    fontSize: 18,
    marginLeft: 10,
  },
  emaildetails:{
    marginTop: 30,
    flexDirection: 'row',
  },
  email:{
    fontSize: 18,
    marginLeft: 10,
  },
  locationdetails:{
    marginTop: 30,
    flexDirection: 'row',
  },
  location:{
    fontSize: 18,
    marginLeft: 10,
  }
})
