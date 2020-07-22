import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home'
import React from 'react';
import  Header from "../screens/header";
const screens={
    Home:{
        screen:Home,
        navigationOptions:{
            headerTitle:()=> <Header />
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);