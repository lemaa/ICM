import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);        
    this.user = {
      "_id": "5c687316f285704b130f76c0",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "firstName": "Amell ",
      "surname": "Fezaii",
      "company": "FRENEX",
      "email": "searsjohnston@frenex.com",
      "phone": "+1 (979) 501-3787",
      "address": "797 Grove Place, Bawcomville, North Dakota, 2871"
    };
}   
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}   >
          <View style={styles.welcomeContainer}>
            <Text>
               <Text style={styles.helloWordText}> Hello,</Text>
               <Text style={styles.UsernameText}> {this.user.firstName} {this.user.surname} </Text>
            </Text>
          </View>
 
        </ScrollView>
      </View>
    );
  }

 

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
 
 
  welcomeContainer: {
    marginTop: 25,
    marginBottom: 20,
    padding: 15,
  },
 
  helloWordText: {
    color: '#e14eca',
    fontWeight: "bold",
    fontSize: 17,
  },

  UsernameText: {
     fontWeight: "bold",
     fontSize: 17,
  },
 
 
});
