import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

export default function ImagePickerExample({setImage}) {
  

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View >
      <TouchableOpacity style={{  alignItems: 'center', justifyContent: 'center' }}  title="Pick an image from camera roll" onPress={pickImage}>
      <AntDesign name="user" size={80} color="red" alignItems="center" justifyContent='center' />
      <Text style={styles.txt}>ADD PROFILE PHOTO</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create ({
  txt:{
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
})