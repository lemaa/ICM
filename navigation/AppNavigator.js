import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import CustomerNavigator from './CustomerNavigator';
import SignInNavigator from './SignInNavigator';

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
  Customer: CustomerNavigator,
  Auth: SignInNavigator
}, {
  initialRouteName: 'Auth',
}));