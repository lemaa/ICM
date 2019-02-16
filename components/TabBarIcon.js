import React from 'react';
import Colors from '../constants/Colors';
import Icons from 'react-native-vector-icons/FontAwesome';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}