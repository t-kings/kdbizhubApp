import  React from 'react';
import {View,  Image } from 'react-native';
import logo from '../assets/logo.png'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import {globalStyles} from '../stylesheet'
export default function Header() {
    return (
      <View style={globalStyles.header}>
        <View style={globalStyles.headerLogoContainer}>
            <Image style={globalStyles.headerLogo} source={logo}/>
        </View>
        <View style={globalStyles.headerIcons}>
            <Ionicons style={globalStyles.headerIconsIcon} name="md-cart" size={24} color="black" />
            <Entypo style={globalStyles.headerIconsIcon} name="wallet" size={24} color="black" />
        </View>
      </View>
    );
  }