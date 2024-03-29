import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel:() => {return null},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name= 'home'
    />
  ),
};

const CustomersStack = createStackNavigator({
  Customers: LinksScreen,
});

CustomersStack.navigationOptions = {
  tabBarLabel:() => {return null},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name= 'users'
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel:() => {return null},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name= 'gear'
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CustomersStack,
  SettingsStack,
});
