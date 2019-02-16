import React from 'react';
import {
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAvoidingView} from 'react-native';
export default class SignInScreen extends React.Component {
  static navigationOptions = {
   header: null
 };

 render() {
   return (     
    <KeyboardAvoidingView style={{ flex: 1}} behavior="padding" enabled>
       <ScrollView style={styles.container}>
 
        <View>
        <Image
              source={
                __DEV__
                  ? require('../assets/images/sign-in-dev.png')
                  : require('../assets/images/sign-in-prod.png')
              }
              style={styles.welcomeImage}
            />
        <Text  style={styles.textLogo}  >log in</Text>
        </View>
        <View  style={styles.signInContainer} >

        <View style={styles.signInInputSection}>
          <Icon name="envelope-o" style={styles.userIcon}/> 
           <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={(emailString) => {this.setState({emailString})}}
           />
       </View>
      
       <View style={styles.signInInputSection}>
          <Icon name="lock" style={styles.passwordIcon}/> 
           <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry= {true}
            onChangeText={(passwordString) => {this.setState({passwordString})}}
           />
       </View>
       <View>
        <TouchableOpacity
         style={styles.ConnexionButton}
         onPress={this._signInAsync}>
         <Text style={styles.ConnexionText}> Se connecter </Text>
         </TouchableOpacity>
         </View>
         <View>
         <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
            <Text style={styles.helpLinks}>  Forgot password ?</Text>
        </TouchableOpacity>

         </View>
         </View>
      
      </ScrollView>
      </KeyboardAvoidingView>
   );
 }

 _signInAsync = async () => {
    this.props.navigation.navigate('Main');
 };
 
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fafafa',

  },
  signInContainer: {
    padding: 15
  },
  welcomeImage: {
    resizeMode: 'contain'

  },
  ConnexionButton: {
    borderColor: '#e14eca',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    resizeMode: 'contain',
    marginTop: 25,
    backgroundColor: '#e14eca',
  },
  ConnexionText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textLogo: {
    position: 'absolute',
    left: 0,
    top: 0,
    fontWeight: '900',
    textTransform: 'lowercase',
    fontSize: 80,
    color: '#FFF',
    paddingTop: 10
  },
  signInInputSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'rgba(29, 37, 59, 0.2)',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  userIcon: {
    padding: 10,
  },
  passwordIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',

  },
  helpLinks: {
    marginTop: 15,
    color: '#ba54f5',
    fontWeight: '100',
  }
});
