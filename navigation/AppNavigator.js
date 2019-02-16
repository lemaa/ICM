import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignInNavigator from './SignInNavigator';

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
  Auth: SignInNavigator
}, {
  initialRouteName: 'Auth',
}));