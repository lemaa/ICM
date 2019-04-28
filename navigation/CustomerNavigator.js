import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import CustomerScreen from '../screens/CustomerScreen';
 
const CustomerStack = createStackNavigator({
  Customer: CustomerScreen
});

 

export default CustomerStack ;