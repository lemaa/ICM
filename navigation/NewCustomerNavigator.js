import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import NewCustomerScreen from '../screens/NewCustomerScreen';
 
const NewCustomerStack = createStackNavigator({
  NewCustomer: NewCustomerScreen
});

 

export default NewCustomerStack ;