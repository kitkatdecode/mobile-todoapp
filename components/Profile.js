import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

const Profile = () => {
  return (
      <ImageBackground source={require('../assets/bg3.png')} style={styles.container}>
          <Image style={styles.image} source={require('../assets/k3.png')}/>
          <Text style={styles.title}> Kartik Saini </Text>
          <Text style={styles.text}> Computer Science & Engg. Graduate</Text>
          <Text style={styles.text}> IIT Kharagpur </Text>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 10,
    width:300, 
    height:600,
    marginTop: 5,
  },
  title: {
    flex:3,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    justifyContent:'center',
  },
  text:{
    flex:1,
    marginBottom: 10,
  },
});

export default Profile;