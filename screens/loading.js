import  React from 'react';
import {View,  Image, ImageBackground } from 'react-native';
import splash from '../assets/splash.png';
import loadingGif from '../assets/loading.gif'; 
export default function Loading() {
    return (
      <View style={{flex:1,padding:10}}>
        <ImageBackground source={splash} style={{flex: 1, resizeMode:'stretch', alignItems:'center'}}>
            <Image style={{width: 50,resizeMode: 'contain', marginBottom:50, position:'absolute'}} source={loadingGif}/>
        </ImageBackground>
      </View>
    );
  }