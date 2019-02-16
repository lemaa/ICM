import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
 
const SignStack = createStackNavigator({
  SignIn: SignInScreen
});

 

export default SignStack ;