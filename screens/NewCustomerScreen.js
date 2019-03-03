import React from 'react';
import { ScrollView, StyleSheet ,View, Text, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
export default class NewCustomerScreen extends React.Component {
  static navigationOptions = {
    title: 'New Customer',
  };
  constructor(props) {
    super(props);        
}   
    
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
        
 
        </ScrollView>
      </View>
    );
  };
  _addUserAsync = async () => {
    this.props.navigation.navigate('Auth');
 };
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     paddingTop: 5,
    // backgroundColor: '#f5f6fa',
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    resizeMode: 'contain',
    height: 150,
    marginBottom: 5,
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0

  },
  textInfo: {
    fontWeight: '300',
    padding: 5,
  },
  textHeaderInfo: {
    fontWeight: '300',
    padding: 5,
    color: '#e14eca',
  },
  iconInfo: {
    margin: 5,
    fontSize: 15,
  },
  searchInputSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(29, 37, 59, 0.2)',
    borderWidth: 1,
    borderRadius: 15,
     marginBottom: 10,
    marginRight: 20,  
    marginLeft: 20,

  },
  searchIcon: {
    padding: 10,
    color: '#e14eca',
  },
  input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 0,
     color: '#424242',

  },
  actionButton: {
     zIndex: 22,
   },
});
