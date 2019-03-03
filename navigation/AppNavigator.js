import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import NewCustomerNavigator from './NewCustomerNavigator';
import SignInNavigator from './SignInNavigator';

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
  NewCustomer: NewCustomerNavigator,
  Auth: SignInNavigator
}, {
  initialRouteName: 'Auth',
}));