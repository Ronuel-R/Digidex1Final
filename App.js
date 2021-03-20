import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <View Style={StyleSheet.container}>
    <ScrollView>
       <Image style = {{width: 400, height: 250}} source= {{uri: "https://lh3.googleusercontent.com/proxy/IJ-KYiyNklk1oT2CG6rJwJtq38gRFy1BzCoy0oBxu3m0JF9zjgSsNbHPEGLzGleTCryHnop8LAQaMFh8cTeWug"}}></Image>

      

      <TextInput
 style={{
  height: 40,
  textAlign: 'center',
  color: 'black'
 }} placeholder= "Input Digimon name"/>
 

        <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}>Welcome to the Digidex</Text>
        <Text
        style={{
          fontSize: 15,
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}>Here you will see different kinds of Digimons with their respective evolutions</Text>
         <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/6/68/Agumon_b.jpg/revision/latest/scale-to-width-down/320?cb=20170210150934"}}></Image>
         <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Agumon (Child)</Text>
         <Image style = {{width: 250, height: 250, marginLeft:70}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/5/56/Greymon_b.jpg/revision/latest/scale-to-width-down/320?cb=20170226001958"}}></Image>
         <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Greymon (Adult)</Text>
        <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://images-na.ssl-images-amazon.com/images/I/71X2urbmTPL._AC_SL1250_.jpg"}}></Image>
        <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Metal Greymon (Champion)</Text>
        <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/4/49/WarGreymon_b.jpg/revision/latest/scale-to-width-down/320?cb=20090127185540"}}></Image>
        <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> WarGreymon (Mega)</Text>
        <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/d/d1/Gabumon_b.jpg/revision/latest/scale-to-width-down/320?cb=20171127121438"}}></Image>
        <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Gabumon (Child)</Text>
        <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/2/20/Garurumon_b.jpg/revision/latest/scale-to-width-down/320?cb=20090205055228"}}></Image>
        <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Garurumon (Adult)</Text>
        <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/c/c9/WereGarurumon_b.jpg/revision/latest/scale-to-width-down/320?cb=20090128171637"}}></Image>
        <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Weregarurumon (Ultimate)</Text>
         <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/1/1d/MetalGarurumon_b.jpg/revision/latest/scale-to-width-down/320?cb=20090127180250"}}></Image>
         <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Metal Garurumon (Mega)</Text>
<Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/7/77/Patamon_b.jpg/revision/latest/scale-to-width-down/320?cb=20150402010956"}}></Image>
<Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Patamon (Child)</Text>
<Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/0/08/Angemon_b.jpg/revision/latest/scale-to-width-down/320?cb=20130402190032"}}></Image>
<Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Angemon (Adult)</Text>
     <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/9/93/MagnaAngemon_b.jpg/revision/latest/scale-to-width-down/320?cb=20090128165835"}}></Image>
<Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> MagnaAngemon (Ultimate)</Text>
        <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/7/7a/Gatomon_b.jpg/revision/latest/scale-to-width-down/320?cb=20130402190852"}}></Image>
<Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Gatomon (Champion)</Text>
        <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/3/39/Angewomon_b.jpg/revision/latest/scale-to-width-down/320?cb=20130402190037"}}></Image>
<Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Angewomon (Ultimate)</Text>
        <Image style = {{width: 200, height: 200, marginLeft:95}} source= {{uri: "https://static.wikia.nocookie.net/digimon/images/1/10/Ophanimon_b.jpg/revision/latest/scale-to-width-down/320?cb=20090227054225"}}></Image>
<Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          textAlign: 'center',
          color: 'black'
        }}> Ophanimon (Mega)</Text>



    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
